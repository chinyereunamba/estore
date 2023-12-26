# Generated by Django 5.0 on 2023-12-25 23:51

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("base", "0008_remove_product_product_images_productimage_product"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="productimage",
            name="product",
        ),
        migrations.AddField(
            model_name="productimage",
            name="name",
            field=models.ForeignKey(
                default=1,
                on_delete=django.db.models.deletion.CASCADE,
                to="base.product",
                verbose_name="Product name",
            ),
            preserve_default=False,
        ),
    ]
