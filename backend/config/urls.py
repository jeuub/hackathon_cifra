from event.views import EventViewSet
from initiative.views import InitiativeViewSet
from django.contrib import admin
from django.urls import path, include
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.conf import settings
from django.conf.urls.static import static

from rest_framework.routers import DefaultRouter
from initiative.views import AddSignature

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

router = DefaultRouter()
router.register('initiative', InitiativeViewSet, basename='initiative')
router.register('event', EventViewSet, basename='event')

urlpatterns = [
    path("api/", include(router.urls)),
    path('admin/', admin.site.urls),

    path("api/initiative/signature/<int:pk>/", AddSignature.as_view()),

    path('api/user/', include('authentication.urls')),

    path('api/token/', TokenObtainPairView.as_view()),
    path('api/token/refresh/', TokenRefreshView.as_view()),
]

urlpatterns += staticfiles_urlpatterns()
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
