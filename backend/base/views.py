from django.shortcuts import render
from .serializers import *
from .models import *
from django.shortcuts import get_object_or_404

from rest_framework.viewsets import ModelViewSet, ViewSet
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework import status

# Create your views here.


class ProductsView(ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [AllowAny]


class ProductImageViewSet(ModelViewSet):
    queryset = ProductImage.objects.all()
    serializer_class = FileListSerializer
    parser_classes = [MultiPartParser, FormParser]
    permission_classes = [AllowAny]

    def list(self, request):
        queryset = ProductImage.objects.all()
        serializer = ProductImageSerializer(queryset, many=True)
        return Response(serializer.data)

    def create(self, request):
        serializer = FileListSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def retrieve(self, request, pk=None):
        queryset = ProductImage.objects.all()
        user = get_object_or_404(queryset, pk=pk)
        serializer = ProductImageSerializer(user)
        return Response(serializer.data)


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
