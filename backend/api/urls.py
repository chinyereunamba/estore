from rest_framework import routers
from users.views import *
from base.views import *
from django.urls import path, include

router = routers.DefaultRouter(trailing_slash=False)
router.register(r"users", AllUsersViewSet, basename="users")
router.register(r"products", ProductsView, basename="products")
router.register(r"categories", CategoryView, basename="categories")
router.register(r"brands", BrandView, basename="brands")
router.register(r"orders", OrderView, basename="orders")

urlpatterns = [
    path("v1/", include(router.urls)),
]
