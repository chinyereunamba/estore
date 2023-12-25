from .models import User

from rest_framework.serializers import ModelSerializer

from dj_rest_auth.serializers import UserDetailsSerializer


class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        exclude = ["password", "user_permissions", "groups"]


class CustomUserDetailsSerializer(UserDetailsSerializer):
    class Meta(UserDetailsSerializer.Meta):
        fields = UserDetailsSerializer.Meta.fields + (
            "is_admin",
            "is_active",
            "phone_number",
            "address",
        )
