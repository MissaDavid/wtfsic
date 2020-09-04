from django.db import models
from django.utils import timezone
from django.utils.translation import gettext as _
from stdimage import StdImageField


class Unit(models.TextChoices):
    UNIT = "U", _("unit")
    GRAM = "G", _("gram")
    KILO = "KG", _("kilogram")
    TEASPOON = "TSP", _("teaspoon")
    TABLESPOON = "TBSP", _("tablespoon")
    CUP = "CUP", _("cup")
    LITER = "L", _("liter")


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
    recipe = models.ForeignKey(
        to="Recipe", on_delete=models.CASCADE, related_name="ingredients"
    )
    ingredient = models.CharField(_("ingredient"), max_length=150)
    amount = models.DecimalField(max_digits=5, decimal_places=1, default=0)
    unit = models.CharField(_("unit"), max_length=5, choices=Unit.choices, default=Unit.UNIT)

    class Meta:
        verbose_name = _("ingredient")
        verbose_name_plural = _("ingredients")

    def __str__(self):
        return self.ingredient


class RecipeImage(models.Model):
    recipe = models.ForeignKey(
        to="Recipe", on_delete=models.CASCADE, related_name="images"
    )
    image = StdImageField(
        upload_to="recipes",
        variations={
            "large": {"width": 1222, "height": 732, "crop": True},
            "medium": {"width": 500, "height": 300, "crop": True},
            "thumbnail": {"width": 100, "height": 60, "crop": True},
        },
        delete_orphans=True,
    )
    sequence = models.PositiveIntegerField(default=0)

    class Meta:
        verbose_name = _("recipe image")
        verbose_name_plural = _("recipe images")

    def __str__(self):
        return f"Image {self.sequence} for {self.recipe}"

