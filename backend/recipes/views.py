from rest_framework import mixins
from rest_framework.viewsets import GenericViewSet
from rest_framework.permissions import IsAdminUser

from .models import Recipe, RecipeImage
from . import serializers


class RecipeViewSet(
    mixins.CreateModelMixin,
    mixins.RetrieveModelMixin,
    mixins.ListModelMixin,
    mixins.DestroyModelMixin,
    GenericViewSet,
):

    queryset = Recipe.objects.all()
    serializer_class = serializers.RecipeSerializer


class RecipeImageViewSet(
    mixins.RetrieveModelMixin, mixins.ListModelMixin, GenericViewSet,
):
    queryset = RecipeImage.objects.all()
    serializer_class = serializers.RecipeImageSerializer
