from rest_framework import routers
from users.views import users
from django.urls import path

router = routers.DefaultRouter(trailing_slash=False)
# router.register(r"users", users)

urlpatterns = [
    path("v1/users/", users, name="users"),
]

