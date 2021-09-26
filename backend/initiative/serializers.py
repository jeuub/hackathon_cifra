from .models import Initiative, Gallery
from rest_framework import serializers
from authentication.serializers import UserSerializer

class InitiativeSerializer(serializers.ModelSerializer):
    creator_info = UserSerializer(source='creator')
    class Meta:
        model = Initiative
        fields = '__all__'

class GallerySerializer(serializers.ModelSerializer):
    class Meta:
        model = Gallery
        fields = ['image']