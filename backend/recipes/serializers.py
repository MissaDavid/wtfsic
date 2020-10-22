from rest_framework import serializers
from .models import Recipe, RecipeImage, Ingredient


def std_image_field_serializer(std_image_field, request=None):
    result = {
        "original": request.build_absolute_uri(std_image_field.url)
        if request
        else std_image_field.url
    }

    for name in std_image_field.field.variations.keys():
        variant = getattr(std_image_field, name)
        if request:
            result[name] = request.build_absolute_uri(variant.url)
        else:
            result[name] = variant.url
    return result


class RecipeImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = RecipeImage
        fields = "__all__"


class IngredientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ingredient
        exclude = ('recipe',)


class RecipeSerializer(serializers.ModelSerializer):
    images = serializers.SerializerMethodField()
    ingredients = IngredientSerializer(many=True)

    class Meta:
        model = Recipe
        fields = [
            "id",
            "author",
            "title",
            "description",
            "images",
            "created_date",
            "published_date",
            "instructions",
            "prep_time",
            "cook_time",
            "ingredients",
        ]

    # https://www.django-rest-framework.org/api-guide/relations/#writable-nested-serializers
    def create(self, validated_data):
        ingredients_data = validated_data.pop('ingredients')
        recipe = Recipe.objects.create(**validated_data)
        for ingredient_data in ingredients_data:
            Ingredient.objects.create(recipe=recipe, **ingredient_data)
        return recipe

    def get_images(self, obj):
        request = self.context.get("request")
        return [
            std_image_field_serializer(si.image, request) for si in obj.images.all()
        ]

