import random
import string
from django.db import models
from django.contrib.auth import get_user_model
from django.utils.translation import gettext_lazy as _
from django.core.validators import MinValueValidator, MaxValueValidator
from django.db.models.signals import pre_save
from django.dispatch import receiver
from django.utils.crypto import get_random_string
import PIL
from datetime import datetime


# Create your models here.


def upload_folder(instance, filename):
    filebase, extension = filename.split(".")
    filename = str(instance.name).strip()
    filename = filename.replace(" ", "-")

    return f"{filename}.{extension}"


class Brand(models.Model):
    brand = models.CharField(
        _("Brand name"), max_length=225, null=False, blank=False, unique=True
    )
    brand_img = models.ImageField(_("Brand Image"), upload_to=upload_folder, blank=True, null=True)
    date_created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.brand


class Category(models.Model):
    category = models.CharField(
        _("Product Category"), max_length=225, null=False, blank=False, unique=True
    )
    category_img = models.ImageField(_("Category Image"), upload_to=upload_folder, null=True, blank=True)
    date_created = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name_plural = "Categories"

    def __str__(self):
        return self.category


def upload_path(instance, filename):
    filebase, extension = filename.split(".")
    folder_name = f"{str(instance.name).strip()}-{datetime.now()}"
    folder_name = folder_name.replace(" ", "-")

    return f"product_images/{folder_name}.{extension}"


class Product(models.Model):
    name = models.CharField(_("Product name"), max_length=255, blank=False, null=False)
    product_id = models.CharField(
        _("Product ID"), unique=True, max_length=20, blank=True, null=True
    )
    brand = models.ForeignKey(Brand, on_delete=models.PROTECT, blank=True, null=True)
    description = models.TextField(_("Product Description"), blank=True, null=True)
    # TODO: User ckeditor
    price = models.DecimalField(
        validators=[MinValueValidator(0.00)], decimal_places=2, max_digits=14
    )
    quantity = models.IntegerField(default=1, validators=[MinValueValidator(0)])
    weight = models.FloatField(_("Weight"), blank=True, null=True)
    category = models.ForeignKey(Category, on_delete=models.PROTECT)

    image = models.ImageField(
        upload_to=upload_path, max_length=512, null=True, blank=True
    )
    color = models.CharField(_("Product color"), max_length=40, blank=True, null=True)
    size = models.CharField(
        _("Size of product"),
        max_length=40,
        blank=True,
        null=True,
        help_text=_("size dimension"),
    )

    date_added = models.DateTimeField(auto_now_add=True, blank=True, null=True)
    date_updated = models.DateField(auto_now=True, blank=True, null=True)

    def __str__(self):
        return self.name

    def upload_image(self, image):
        return ProductImage.objects.create(name=self, image=image)

    def upload_image(self, review, user, review_title, rating):
        return Review.objects.create(
            product=self,
            user=user,
            review=review,
            review_title=review_title,
            rating=rating,
        )


class ProductImage(models.Model):
    name = models.ForeignKey(
        Product, on_delete=models.CASCADE, verbose_name=_("Product name")
    )
    image = models.ImageField(upload_to=upload_path, max_length=225)
    date_added = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.image} added"


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
    order = models.ForeignKey(Order, on_delete=models.CASCADE, blank=True, null=True)
    user = models.ForeignKey(USER, on_delete=models.CASCADE, null=False, blank=False, default=1)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField()

    def __str__(self):
        return (
            f"{self.quantity} x {self.product.name}"
        )


class Review(models.Model):
    user = models.ForeignKey(USER, on_delete=models.PROTECT)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    review_title = models.CharField(_("Review Title"), max_length=125)
    review = models.TextField(_("Product Review"))
    rating = models.IntegerField(
        validators=[MinValueValidator(0), MaxValueValidator(5)]
    )
    date_created = models.DateTimeField(auto_now_add=True, blank=True, null=True)

    def __str__(self):
        return self.review_title
