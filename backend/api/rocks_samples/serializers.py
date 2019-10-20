from django.contrib.auth.models import User, Group
from rest_framework import serializers
from api.rocks_samples.models import RockSample


class RockSampleSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        abstract = True
        model = RockSample
        fields = ['id', 'composition', 'date']


