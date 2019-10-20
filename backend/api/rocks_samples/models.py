from django.db import models
from rest_framework import serializers

# Create your models here.

class RockSample(models.Model):
    composition = models.CharField(max_length=1000)
    date = models.DateTimeField()

