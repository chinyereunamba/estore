from django.shortcuts import render
from .serializers import *
from .models import Product, Category, Brand

from rest_framework.viewsets import ModelViewSet

# Create your views here.


class ProductsView(ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


products = ProductsView.as_view({"get": "list"})
products = ProductsView.as_view({"post": "create"})


class CategoryView(ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


category = CategoryView.as_view({"get": "list"})
category = CategoryView.as_view({"post": "create"})


class BrandView(ModelViewSet):
    queryset = Brand.objects.all()
    serializer_class = BrandSerializer


brand = BrandView.as_view({"get": "list"})
brand = BrandView.as_view({"post": "create"})


class OrderView(ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
