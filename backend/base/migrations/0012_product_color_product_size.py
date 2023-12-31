# Generated by Django 5.0 on 2023-12-27 06:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("base", "0011_review"),
    ]

    operations = [
        migrations.AddField(
            model_name="product",
            name="color",
            field=models.CharField(
                blank=True, max_length=40, null=True, verbose_name="Product color"
            ),
        ),
        migrations.AddField(
            model_name="product",
            name="size",
            field=models.CharField(
                blank=True,
                help_text="size dimension",
                max_length=40,
                null=True,
                verbose_name="Size of product",
            ),
        ),
    ]
