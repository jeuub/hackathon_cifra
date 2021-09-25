from django.http.response import HttpResponse
from rest_framework import viewsets
from rest_framework.response import Response
from .models import Initiative, Gallery, Signature
from .serializers import GallerySerializer, InitiativeSerializer
from rest_framework.views import APIView
from authentication.models import User
import jwt


class InitiativeViewSet(viewsets.ViewSet):
    def list(self, request):
        queryset = Initiative.objects.all()
        serializer = InitiativeSerializer(queryset, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        queryset = Initiative.objects.get(id=pk)
        images = Gallery.objects.filter(initiative=queryset)
        data = InitiativeSerializer(queryset).data
        images = GallerySerializer(images, many=True).data
        for i in range(len(images)):
            data[f'img{i}'] = images[i]['image']
        return Response(data)

    def create(self, request):
        data = request.data
        files = request.FILES
        try:
            new_initiative = Initiative.objects.create(
                    title=data['title'], description=data['description'])
            if files:
                for i in range(len(files)):
                    Gallery.objects.create(image=files[f'photo{i}'], initiative=new_initiative)
            new_initiative.save()
            return Response({'message': 'done'})
        except KeyError:
            new_initiative.delete()
            return Response({'message': 'not filled correctly'})


class AddSignature(APIView):
    def get(self, request, pk):
        token = request.COOKIES.get('token')

        if not token:
            return Response({'message': 'Unauthenticated'})

        try:
            payload = jwt.decode(token, 'secret', algorithms=['HS256'])
        except jwt.ExpiredSignatureError:
            return Response({'message': 'Unauthenticated'})

        user = User.objects.get(id=payload['id'])
        init = Initiative.objects.get(id=pk)
        try:
            Signature.objects.get(initiative=init, user=user)
        except Signature.DoesNotExist:
            return Response({'message':'not signed'})
        return Response({'message': 'signed'})

    def post(self, request, pk):
        token = request.COOKIES.get('token')

        if not token:
            return Response({'message': 'Unauthenticated'})

        try:
            payload = jwt.decode(token, 'secret', algorithms=['HS256'])
        except jwt.ExpiredSignatureError:
            return Response({'message': 'Unauthenticated'})

        user = User.objects.get(id=payload['id'])
        init = Initiative.objects.get(id=pk)
        try:
            Signature.objects.get(initiative=init, user=user)
        except Signature.DoesNotExist:
            Signature.objects.create(initiative=init, user=user)
            return Response({'message':'created'})
        return Response({'message': 'already exist'})

    def delete(self, request, pk):
        token = request.COOKIES.get('token')

        if not token:
            return Response({'message': 'Unauthenticated'})

        try:
            payload = jwt.decode(token, 'secret', algorithms=['HS256'])
        except jwt.ExpiredSignatureError:
            return Response({'message': 'Unauthenticated'})

        user = User.objects.get(id=payload['id'])
        init = Initiative.objects.get(id=pk)

        try:
            signature = Signature.objects.get(initiative=init, user=user)
            signature.delete()
        except Signature.DoesNotExist:
            return Response({'message': 'signature not found'})

        return Response({'message': 'success'})