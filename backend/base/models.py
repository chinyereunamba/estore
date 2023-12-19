import random
import string
from django.db import models
from django.contrib.auth.models import User
from django.utils.translation import gettext_lazy as _

# Create your models here.

class Brand(models.Model):
    brand = models.CharField(_("Brand name"), max_length=225, null=False, blank=False)

    def __str__(self):
        return self.brand


class Category(models.Model):
    category = models.CharField(
        _("Product Category"), max_length=225, null=False, blank=False
    )

    class Meta:
        verbose_name_plural = 'Categories'

    def __str__(self):
        return self.category


class Product(models.Model):
    name = models.CharField(_("Product name"), max_length=255, blank=False, null=False)
    product_id = models.CharField(
        _("Product ID"), unique=True, max_length=20, blank=True, null=True
    )
    brand = models.ForeignKey(Brand, on_delete=models.CASCADE, blank=True, null=True)
    description = models.TextField(_("Product Description"), blank=True, null=True)
    price = models.IntegerField()
    quantity = models.IntegerField(default=1)
    weight = models.IntegerField(_("Weight"), blank=True, null=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)

    def save(self, *args, **kwargs):
        if self.product_id == None:
            random_part = "".join(
                random.choices(string.ascii_uppercase + string.digits, k=16)
            )
            prod_id = f"PROD{random_part}"
            has_prod_id = Product.objects.filter(product_id=prod_id).exists()

            while has_prod_id:
                random_part = "".join(
                    random.choices(string.ascii_uppercase + string.digits, k=16)
                )
                prod_id = f"PROD{random_part}"
                has_prod_id = Product.objects.filter(product_id=prod_id).exists()

            self.product_id = prod_id

        return super().save(*args, **kwargs)
