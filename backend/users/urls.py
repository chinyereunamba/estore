from django.urls import path
from .views import GoogleLogin
from allauth.account.views import signup

urlpatterns = [
    path("api/auth/google/", GoogleLogin.as_view(), name="google_login"),
]
