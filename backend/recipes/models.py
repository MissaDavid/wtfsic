from django.db import models
from django.utils import timezone
from django.utils.translation import gettext as _


UNIT_CHOICES = (
  ("g", _("gram")),
  ("kg", _("kilogram")),
  ("tsp", _("teaspoon")),
  ("tbsp", _("tablespoon")),
  ("cup", _("cup")),
)

class Recipe(models.Model):
  author = models.ForeignKey('auth.User', on_delete=models.CASCADE)
  title = models.CharField(max_length=200)
  description = models.TextField()
  created_date = models.DateTimeField(auto_now_add=True)
  published_date = models.DateTimeField(blank=True, null=True)
  instructions = models.TextField()
  prep_time = models.DurationField()
  cook_time = models.DurationField()

  def __str__(self):
    return self.title

  def publish(self):
    self.published_date = timezone.now()
    self.save()

class Ingredient(models.Model):
  name = models.ForeignKey(to="Recipe", on_delete=models.CASCADE, related_name="ingredients")

  def __str__(self):
    return self.name


class RecipeImage(models.Model):
  pass