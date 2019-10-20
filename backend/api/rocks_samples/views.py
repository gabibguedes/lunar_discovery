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

    def get(self, request, rock_sample_id=None):

        if rock_sample_id:
            rock_sample = get_object_or_404(RockSample, pk=rock_sample_id)
            return Response(RockSampleSerializer(rock_sample).data)

        rock_samples = RockSampleSerializer(
            RockSample.objects.filter(), 
            many=True
        ).data

        rock_samples = sorted(rock_samples, key=lambda x: x['name'])

        return Response(rock_samples)

    def post(self, request, rock_sample_id=None):
        data = request_to_dict(request)
        rock_sample = RockSample.objects.create(
            composition=data['composition'],
            date=data['data']
        )

        return Response(RockSampleSerializer(rock_sample).data, status=201)

class RoverUpdateViewSet(viewsets.ModelViewSet):
    queryset = RoverUpdate.objects.all()
    serializer_class = RoverUpdateSerializer