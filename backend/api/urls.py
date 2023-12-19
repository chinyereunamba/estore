from rest_framework import routers
from users.views import *
from base.views import *
from django.urls import path, include

router = routers.DefaultRouter(trailing_slash=False)
router.register(r"users", AllUsersViewSet, basename="users")
router.register(r"products", ProductsView, basename="products")
router.register(r"category", CategoryView, basename="category")
router.register(r"brand", BrandView, basename="brands")

urlpatterns = [
    path("v1/", include(router.urls)),
]
