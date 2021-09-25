from django.contrib import admin
from .models import Initiative, Gallery, Signature

class GalleryInline(admin.TabularInline):
    fk_name = 'initiative'
    model = Gallery


@admin.register(Initiative)
class InitiativeAdmin(admin.ModelAdmin):
    inlines = [GalleryInline,]

admin.site.register(Signature)
