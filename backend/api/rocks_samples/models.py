from django.db import models
from rest_framework import serializers
from django.core.validators import MaxValueValidator, MinValueValidator

# Create your models here.

class RockSample(models.Model):
    composition = models.CharField(max_length=1000)
    date = models.DateTimeField()

class RoverUpdate(models.Model):
    batery = models.IntegerField(
        validators=[MaxValueValidator(100), MinValueValidator(0)]
    )
    date = models.DateTimeField()

