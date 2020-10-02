# Generated by Django 3.0.7 on 2020-09-05 00:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("recipes", "0001_initial"),
    ]

    operations = [
        migrations.AlterModelOptions(
            name="ingredient",
            options={
                "verbose_name": "ingredient",
                "verbose_name_plural": "ingredients",
            },
        ),
        migrations.AddField(
            model_name="ingredient",
            name="amount",
            field=models.DecimalField(decimal_places=1, default=0, max_digits=5),
        ),
        migrations.AddField(
            model_name="ingredient",
            name="unit",
            field=models.CharField(
                choices=[
                    ("unit", "unit"),
                    ("g", "gram"),
                    ("kg", "kilogram"),
                    ("tsp", "teaspoon"),
                    ("tbsp", "tablespoon"),
                    ("cup", "cup"),
                    ("l", "liter"),
                ],
                default="unit",
                max_length=5,
                verbose_name="unit",
            ),
        ),
    ]
