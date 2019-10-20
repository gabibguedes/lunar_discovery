from django.contrib.auth.models import User, Group
from rest_framework import serializers
from api.rocks_samples.models import RockSample, RoverUpdate


class RockSampleSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = RockSample
        fields = ['id', 'composition', 'date']

class RoverUpdateSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = RoverUpdate
        fields = ['id', 'batery', 'date']


