import random
import string
from django.db import models
from django.contrib.auth import get_user_model
from django.utils.translation import gettext_lazy as _
from django.core.validators import MinValueValidator
from django.db.models.signals import pre_save
from django.dispatch import receiver
from django.utils.crypto import get_random_string

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
    brand = models.ForeignKey(Brand, on_delete=models.PROTECT, blank=True, null=True)
    description = models.TextField(_("Product Description"), blank=True, null=True)
    price = models.DecimalField(validators=[MinValueValidator(0.00)], decimal_places=2, max_digits=14)
    quantity = models.IntegerField(default=1, validators=[MinValueValidator(0)])
    weight = models.FloatField(_("Weight"), blank=True, null=True)
    category = models.ForeignKey(Category, on_delete=models.PROTECT)

    def __str__(self):
        return self.name


@receiver(pre_save, sender=Product)
def product_pre_save(sender, instance, **kwargs):
    if not instance.product_id:
        while True:
            random_part = get_random_string(
                length=16, allowed_chars=string.ascii_uppercase + string.digits
            )
            prod_id = f"PROD{random_part}"
            if not Product.objects.filter(product_id=prod_id).exists():
                instance.product_id = prod_id
                break


USER = get_user_model()


class Order(models.Model):
    user = models.ForeignKey(USER, on_delete=models.PROTECT)
    products = models.ManyToManyField(Product, through="OrderItem")
    order_number = models.CharField(max_length=19, blank=True, null=True)
    total_amount = models.DecimalField(max_digits=14, decimal_places=2)
    date_ordered = models.DateTimeField(auto_now_add=True)
    date_delivered = models.DateField(blank=True, null=True)

    def __str__(self):
        return f"Order #{self.order_number} - {self.user.first_name}"


@receiver(pre_save, sender=Order)
def order_pre_save(sender, instance, **kwargs):
    if not instance.order_number:
        while True:
            random_part = get_random_string(
                length=16, allowed_chars=string.ascii_uppercase + string.digits
            )
            ord_id = f"ORD{random_part}"
            if not Order.objects.filter(order_number=ord_id).exists():
                instance.product_id = ord_id
                break


class OrderItem(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField()

    def __str__(self):
        return f"{self.quantity} x {self.product.name} in Order #{self.order.order_number}"
