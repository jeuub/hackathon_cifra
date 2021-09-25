from rest_framework import viewsets
from rest_framework.response import Response
from .models import Event, Gallery
from .serializers import EventSerializer, GallerySerializer
from datetime import datetime


class EventViewSet(viewsets.ViewSet):
    def list(self, request):
        queryset = Event.objects.all()
        serializer = EventSerializer(queryset, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        queryset = Event.objects.get(id=pk)
        images = Gallery.objects.filter(event=queryset)
        data = EventSerializer(queryset).data
        images = GallerySerializer(images, many=True).data
        for i in range(len(images)):
            data[f'img{i}'] = images[i]['image']
        return Response(data)

    def create(self, request):
        data = request.data
        files = request.FILES
        try:
            date_of_event = datetime.strptime(data['date'], "%d-%m-%Y").strftime("%Y-%m-%d")
            new_event = Event.objects.create(
                    title=data['title'], description=data['description'], date_of_event=date_of_event, place=data['place'])
            if files:
                for i in range(len(files)):
                    Gallery.objects.create(image=files.get(f'photo{i}'), event=new_event)
            new_event.save()
            return Response({'message': 'done'})
        except KeyError:
            new_event.delete()
            return Response({'message': 'not filled correctly'})