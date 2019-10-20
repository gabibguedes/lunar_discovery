from django.shortcuts import render

# Create your views here.
from api.rocks_samples.models import RockSample, RoverUpdate
from rest_framework import viewsets
from api.rocks_samples.serializers import RockSampleSerializer, RoverUpdateSerializer


class RockSampleViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = RockSample.objects.all()
    serializer_class = RockSampleSerializer

class RoverUpdateViewSet(viewsets.ModelViewSet):
    queryset = RoverUpdate.objects.all()
    serializer_class = RoverUpdateSerializer