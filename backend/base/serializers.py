from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
import base64

from .models import *


class FileListSerializer(serializers.ModelSerializer):
    image = serializers.ListField(
        child=serializers.FileField(
            max_length=100000, allow_empty_file=False, use_url=False
        ),
        write_only=True,
    )

    def create(self, validated_data):
        product = Product.objects.get(name=validated_data.get("name"))
        image = validated_data.pop("image")
        for img in image:
            print(img)
            photo = ProductImage.objects.create(image=img, name=product)
        return photo

    class Meta:
        model = ProductImage
        fields = ["id", "name", "image", "date_added"]


class ProductImageSerializer(ModelSerializer):
    image = serializers.ImageField()

    class Meta:
        model = ProductImage
        fields = "__all__"
        read_only_field = ["name"]


class CategorySerializer(ModelSerializer):
    class Meta:
        model = Category
        fields = "__all__"


class BrandSerializer(ModelSerializer):
    class Meta:
        model = Brand
        fields = "__all__"


class ProductSerializer(serializers.ModelSerializer):
    product_images = serializers.SerializerMethodField()

    def get_product_images(self, obj):
        product = Product.objects.get(name=obj.name)
        imgs = ProductImage.objects.filter(name=product)
        product_images_data = ProductImageSerializer(imgs, many=True).data
        return product_images_data

    class Meta:
        model = Product
        fields = [
            "id",
            "name",
            "product_id",
            "brand",
            "description",
            "price",
            "quantity",
            "weight",
            "color",
            "size",
            "category",
            "image",
            "product_images",
        ]

    # def update(self, instance, validated_data):
    #     brand_data = validated_data.get("brand")
    #     category_data = validated_data.get("category")

    #     # Update other fields
    #     instance.description = validated_data.get("description", instance.description)
    #     instance.name = validated_data.get("name", instance.name)
    #     instance.price = validated_data.get("price", instance.price)
    #     instance.quantity = validated_data.get("quantity", instance.quantity)
    #     instance.weight = validated_data.get("weight", instance.weight)
    #     # ... update other fields ...
    #     instance.image = validated_data.get('image', instance.image)

    #     instance.save()
    #     return instance


class OrderItemSerializer(ModelSerializer):
    class Meta:
        model = OrderItem
        fields = "__all__"


class OrderSerializer(ModelSerializer):
    class Meta:
        model = Order
        fields = "__all__"


class ReviewSerializer(ModelSerializer):
    class Meta:
        model = Review
        fields = "__all__"
