from rest_framework.viewsets import ModelViewSet

from .models import Recipe, RecipeImage, Ingredient
from .serializers import RecipeSerializer, RecipeImageSerializer, IngredientSerializer


class RecipeViewSet(ModelViewSet):
    """
    This Recipe viewset auto-magically provides `list`, `create`, `retrieve`,
    `update` and `destroy` actions.
    """

    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer


class RecipeImageViewSet(ModelViewSet):
    queryset = RecipeImage.objects.all()
    serializer_class = RecipeImageSerializer


class IngredientViewSet(ModelViewSet):
    queryset = Ingredient.objects.all()
    serializer_class = IngredientSerializer
