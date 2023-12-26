# Generated by Django 5.0 on 2023-12-25 23:44

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("base", "0007_alter_product_product_images"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="product",
            name="product_images",
        ),
        migrations.AddField(
            model_name="productimage",
            name="product",
            field=models.ForeignKey(
                default=1,
                on_delete=django.db.models.deletion.CASCADE,
                to="base.product",
            ),
            preserve_default=False,
        ),
    ]
