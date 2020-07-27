from django.urls import path, re_path
from rest_framework.routers import DefaultRouter

from . import views


router = DefaultRouter(trailing_slash=False)
router.register("recipes", views.RecipeViewSet, basename="recipe")
router.register("images", views.RecipeImageViewSet, basename="images")

urlpatterns = router.urls
