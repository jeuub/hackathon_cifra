from django.contrib import admin
from .models import Gallery, Event

class GalleryInline(admin.TabularInline):
    fk_name = 'event'
    model = Gallery

@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    inlines = [GalleryInline,]
