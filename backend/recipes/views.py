from rest_framework import mixins

# from rest_framework.generics import CreateAPIView, ListAPIView, RetrieveAPIView
from rest_framework.viewsets import GenericViewSet
from rest_framework.permissions import IsAdminUser

from .models import Recipe
from . import serializers


class RecipeViewSet(
    mixins.CreateModelMixin,
    mixins.RetrieveModelMixin,
    mixins.ListModelMixin,
    GenericViewSet,
):

    queryset = Recipe.objects.all()
    serializer_class = serializers.RecipeSerializer
