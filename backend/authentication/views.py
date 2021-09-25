from rest_framework.views import APIView
from rest_framework.response import Response
from django.db import IntegrityError
import datetime
import jwt
from django.shortcuts import render

from initiative.models import Initiative
from initiative.serializers import InitiativeSerializer

from .serializers import UserSerializer
from .models import User


class RegisterView(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        response = Response()
        response.data = serializer.data
        response.data['message'] = 'success'
        return response


class LoginView(APIView):
    def post(self, request):
        email = request.data['email']
        password = request.data['password']

        try:
            user = User.objects.get(email=email)
        except Exception:
            return Response({'message': 'User not found'})

        if not user.check_password(password):
            return Response({'message': 'Incorrect password'})

        payload = {
            'id': user.id,
            'exp': datetime.datetime.utcnow() + datetime.timedelta(days=5),
            'iat': datetime.datetime.utcnow()
        }

        token = jwt.encode(payload, 'secret', algorithm='HS256')

        response = Response()

        response.set_cookie(key='token', value=token, httponly=True)
        response.data = {
            'message': 'success',
            'first_name': user.first_name,
            'last_name': user.last_name,
            'email': user.email,
            'token': token
        }
        return response


class UserView(APIView):
    def get(self, request):
        token = request.COOKIES.get('token')

        if not token:
            return Response({'message': 'Unauthenticated'})

        try:
            payload = jwt.decode(token, 'secret', algorithms=['HS256'])
        except jwt.ExpiredSignatureError:
            return Response({'message': 'Unauthenticated'})

        data = {}

        user = User.objects.get(id=payload['id'])
        data = UserSerializer(user).data

        users_initiatives = Initiative.objects.filter(creator=user)
        data['initiatives'] = InitiativeSerializer(users_initiatives, many=True).data

        return Response(data)


class LogoutView(APIView):
    def post(self, request):
        response = Response()
        response.delete_cookie('token')
        response.data = {
            'message': 'success'
        }

        return response


class UpdateView(APIView):
    def patch(self, request, *args, **kwargs):
        token = request.COOKIES.get('token')

        if not token:
            return Response({'message': 'Unauthenticated'})

        try:
            payload = jwt.decode(token, 'secret', algorithms=['HS256'])
        except jwt.ExpiredSignatureError:
            return Response({'message': 'Unauthenticated'})

        user = User.objects.get(id=payload['id'])
        data = request.data

        response = Response()

        try:
            try:
                avatar = request.FILES['avatar']
                user.user_avatar = avatar
                user.save()
            except KeyError:
                pass

            if 'email' in data:
                user.email = data['email']
            if 'first_name' in data:
                user.first_name = data['first_name']
            if 'last_name' in data:
                user.last_name = data['last_name']
            if 'password' in data:
                user.set_password(data['password'])

            user.save()

            response.data = {
                'message': 'success'
            }
        except IntegrityError:
            response.data = {
                'message': 'failed'
            }

        return response


class DeleteView(APIView):
    def delete(self, request):
        data = request.data
        response = Response()
        token = request.COOKIES.get('token')

        if not token:
            return Response({'message': 'Unauthenticated'})

        payload = jwt.decode(token, 'secret', algorithms=['HS256'])
        user = User.objects.get(id=payload['id'])

        if (user.check_password(data.get('password')) and user.email == data.get('email')):
            user.delete()
            response.delete_cookie('token')
            response.data = {
                'message': 'success'
            }
        else:
            response.data = {
                'message': 'failed'
            }

        return response

def index(request):
    return render(request, 'index.html')


def index_pk(request, pk):
    return render(request, 'index.html')