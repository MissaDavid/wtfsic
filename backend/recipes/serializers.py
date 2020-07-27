from rest_framework import serializers
from .models import Recipe, RecipeImage


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


class RecipeSerializer(serializers.ModelSerializer):
    images = serializers.SerializerMethodField()

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
        ]

    def get_images(self, obj):
        request = self.context.get("request")
        return [
            std_image_field_serializer(si.image, request) for si in obj.images.all()
        ]


class RecipeImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = RecipeImage
        fields = "__all__"

