from rest_framework.serializers import ModelSerializer
from rest_framework import serializers


from .models import *


class ProductImageSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(
        max_length=100000, allow_empty_file=False, use_url=False
    )

    class Meta:
        model = ProductImage
        fields = ("id", "name", "image", "date_added")

    def create(self, validated_data):
        image = validated_data.pop("image")
        product_image = ProductImage.objects.create(image=image, **validated_data)
        return product_image


class CategorySerializer(ModelSerializer):
    class Meta:
        model = Category
        fields = "__all__"


class BrandSerializer(ModelSerializer):
    class Meta:
        model = Brand
        fields = "__all__"

class ProductSerializer(serializers.ModelSerializer):
    category = serializers.CharField(source='category.category')
    brand = serializers.CharField(source='brand.brand')
    product_images = serializers.SerializerMethodField()

    def get_product_images(self, obj):
        product_images = ProductImageSerializer()
        lst = []
        for image in product_images:
            product_image = Product.objects.filter(name=image.name)
            lst.append(product_image)
        return lst
            

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
            "category",
            "image",
            "product_images",
        ]



class OrderItemSerializer(ModelSerializer):
    class Meta:
        model = OrderItem
        fields = "__all__"


class OrderSerializer(ModelSerializer):
    class Meta:
        model = Order
        fields = "__all__"


