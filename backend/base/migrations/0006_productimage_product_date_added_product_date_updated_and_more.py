# Generated by Django 5.0 on 2023-12-25 22:52

import base.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("base", "0005_remove_order_product_remove_order_quantity_and_more"),
    ]

    operations = [
        migrations.CreateModel(
            name="ProductImage",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "image",
                    models.ImageField(
                        max_length=225, upload_to=base.models.upload_path
                    ),
                ),
                ("date_added", models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.AddField(
            model_name="product",
            name="date_added",
            field=models.DateTimeField(auto_now_add=True, null=True),
        ),
        migrations.AddField(
            model_name="product",
            name="date_updated",
            field=models.DateField(auto_now=True, null=True),
        ),
        migrations.AddField(
            model_name="product",
            name="image",
            field=models.ImageField(
                blank=True, max_length=512, null=True, upload_to=base.models.upload_path
            ),
        ),
        migrations.AddField(
            model_name="product",
            name="product_images",
            field=models.ManyToManyField(to="base.productimage"),
        ),
    ]
