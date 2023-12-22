from django.shortcuts import render
from .serializers import *
from .models import *

from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import AllowAny, IsAuthenticated

# Create your views here.


class ProductsView(ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [AllowAny]


products = ProductsView.as_view({"get": "list"})
products = ProductsView.as_view({"post": "create"})


class CategoryView(ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [AllowAny]


category = CategoryView.as_view({"get": "list"})
category = CategoryView.as_view({"post": "create"})


class BrandView(ModelViewSet):
    queryset = Brand.objects.all()
    serializer_class = BrandSerializer
    permission_classes = [AllowAny]


brand = BrandView.as_view({"get": "list"})
brand = BrandView.as_view({"post": "create"})


class OrderView(ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    permission_classes = [IsAuthenticated]


class OrderItemView(ModelViewSet):
    queryset = OrderItem.objects.all()
    serializer_class = OrderItemSerializer
    permission_classes = [AllowAny]
