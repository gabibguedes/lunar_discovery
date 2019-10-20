from django.urls import include, path
from rest_framework import routers
from api.rocks_samples import views

router = routers.DefaultRouter()
router.register(r'rock-sample', views.RockSampleViewSet)
router.register(r'rover-update', views.RoverUpdateViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
