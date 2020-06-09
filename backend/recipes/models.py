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
    author = models.ForeignKey("auth.User", on_delete=models.CASCADE)
    title = models.CharField(_("title"), max_length=150)
    description = models.TextField(_("short description"), default="", max_length=300)
    created_date = models.DateTimeField(auto_now_add=True)
    published_date = models.DateTimeField(blank=True, null=True)
    instructions = models.TextField(_("instructions"))
    prep_time = models.DurationField()
    cook_time = models.DurationField()

    class Meta:
        verbose_name = _("recipe")
        verbose_name_plural = _("recipes")

    def __str__(self):
        return self.title

    def publish(self):
        self.published_date = timezone.now()
        self.save()


class Ingredient(models.Model):
    name = models.ForeignKey(
        to="Recipe", on_delete=models.CASCADE, related_name="ingredients"
    )

    def __str__(self):
        return self.name


class RecipeImage(models.Model):
    pass
