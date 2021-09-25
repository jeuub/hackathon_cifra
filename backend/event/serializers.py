from .models import Event, Gallery
from rest_framework import serializers, fields

class EventSerializer(serializers.ModelSerializer):
    date_of_event = fields.DateField(format='%d-%m-%Y', input_formats=['%d-%m-%Y'])
    class Meta:
        model = Event
        fields = '__all__'

class GallerySerializer(serializers.ModelSerializer):
    class Meta:
        model = Gallery
        fields = ['image']