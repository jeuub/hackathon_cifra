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
            required_signs = data['required_signatures']
            if not required_signs:
                return Response({'message': 'filled not correctly'})
            required_signs = int(required_signs)
            if required_signs < 10:
                return Response({'message': 'amount of required signs is too low'})
            new_initiative = Initiative.objects.create(
                    title=data['title'], description=data['description'], required_amount_of_signatures=required_signs)
            if files:
                for i in range(len(files)):
                    Gallery.objects.create(image=files[f'photo{i}'], initiative=new_initiative)
            new_initiative.save()
            return Response({'message': 'done'})
        except KeyError:
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
        try:
            user = User.objects.get(id=payload['id'])
            init = Initiative.objects.get(id=pk)
            Signature.objects.get(initiative=init, user=user)
        except Signature.DoesNotExist:
            return Response({'message':'not signed'})
        except User.DoesNotExist:
            return Response({'message': 'Unauthenticated'})
        except Initiative.DoesNotExist:
            return Response({'message':'initiative not found'})
        return Response({'message': 'signed'})

    def post(self, request, pk):
        token = request.COOKIES.get('token')

        if not token:
            return Response({'message': 'Unauthenticated'})

        try:
            payload = jwt.decode(token, 'secret', algorithms=['HS256'])
        except jwt.ExpiredSignatureError:
            return Response({'message': 'Unauthenticated'})

        try:
            user = User.objects.get(id=payload['id'])
            init = Initiative.objects.get(id=pk)
            Signature.objects.get(initiative=init, user=user)
        except Signature.DoesNotExist:
            Signature.objects.create(initiative=init, user=user)
            return Response({'message':'created'})
        except User.DoesNotExist:
            return Response({'message': 'Unauthenticated'})
        except Initiative.DoesNotExist:
            return Response({'message':'initiative not found'})
        return Response({'message': 'already exist'})

    def delete(self, request, pk):
        token = request.COOKIES.get('token')

        if not token:
            return Response({'message': 'Unauthenticated'})

        try:
            payload = jwt.decode(token, 'secret', algorithms=['HS256'])
        except jwt.ExpiredSignatureError:
            return Response({'message': 'Unauthenticated'})

        try:
            user = User.objects.get(id=payload['id'])
            init = Initiative.objects.get(id=pk)
            signature = Signature.objects.get(initiative=init, user=user)
            signature.delete()
        except Signature.DoesNotExist:
            return Response({'message': 'signature not found'})
        except User.DoesNotExist:
            return Response({'message': 'Unauthenticated'})
        except Initiative.DoesNotExist:
            return Response({'message':'initiative not found'})

        return Response({'message': 'success'})