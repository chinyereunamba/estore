from rest_framework.serializers import ModelSerializer
from rest_framework import serializers


from .models import *


class FileListSerializer(serializers.ModelSerializer):
    image = serializers.ListField(
        child=serializers.FileField(
            max_length=100000, allow_empty_file=False, use_url=False
        ),
        write_only=True
    )

    def create(self, validated_data):
        product = Product.objects.get(name=validated_data.get('name'))
        image = validated_data.pop("image")
        for img in image:
            print(img)
            photo = ProductImage.objects.create(
                image=img, name=product
            )
        return photo
    
    class Meta:
        model = ProductImage
        fields = '__all__'


class ProductImageSerializer(ModelSerializer):
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


class MultipleImageSerializer(ModelSerializer):
    images = serializers.ListField(child=serializers.ImageField())


class ProductSerializer(serializers.ModelSerializer):
    category = CategorySerializer()
    brand = BrandSerializer()
    # product_images = ProductImageSerializer()

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
