from rest_framework import routers
from users.views import *
from base.views import *
from django.urls import path, include
from dj_rest_auth.views import LoginView, LogoutView, UserDetailsView

router = routers.DefaultRouter(trailing_slash=False)
router.register(r"users", AllUsersViewSet, basename="users")
router.register(r"products", ProductsView, basename="products")
router.register(r"categories", CategoryView, basename="categories")
router.register(r"brands", BrandView, basename="brands")
router.register(r"orders", OrderView, basename="orders")
router.register(r"products-images", ProductImageViewSet, basename="productimage")

urlpatterns = [
    path("v1/", include(router.urls)),
    path("v1/orders/items", OrderItemView.as_view({"get": "list"})),
    path("v1/orders/items", OrderItemView.as_view({"post": "create"})),
    path("v1/orders/items", OrderItemView.as_view({"put": "partial_update"})),
    path("v1/auth/login/", LoginView.as_view()),
    path("v1/auth/user/", UserDetailsView.as_view()),
    # path("v1/auth/user/", UserDetailsView.as_view()),
]
