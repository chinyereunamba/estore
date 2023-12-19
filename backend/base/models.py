import random
import string
from django.db import models
from django.contrib.auth import get_user_model
from django.utils.translation import gettext_lazy as _

# Create your models here.


class Brand(models.Model):
    brand = models.CharField(_("Brand name"), max_length=225, null=False, blank=False)
    date_created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.brand


class Category(models.Model):
    category = models.CharField(
        _("Product Category"), max_length=225, null=False, blank=False
    )
    date_created = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name_plural = "Categories"

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

    def __str__(self):
        return self.name

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


USER = get_user_model()


class Order(models.Model):
    user = models.ForeignKey(USER, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.IntegerField()
    order_number = models.CharField(max_length=19, blank=True, null=True)
    date_ordered = models.DateTimeField(auto_now_add=True)
    date_delivered = models.DateField(blank=True, null=True)

    def save(self, *args, **kwargs):
        if self.order_number == None:
            random_part = "".join(
                random.choices(string.ascii_uppercase + string.digits, k=16)
            )
            ord_id = f"ORD{random_part}"
            has_ord_id = Order.objects.filter(order_number=ord_id).exists()

            while has_ord_id:
                random_part = "".join(
                    random.choices(string.ascii_uppercase + string.digits, k=16)
                )
                prod_id = f"ORD{random_part}"
                has_ord_id = Order.objects.filter(order_number=ord_id).exists()

            self.order_number = ord_id

        return super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.product} ordered"
