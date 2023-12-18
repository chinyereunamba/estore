from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User

# Register your models here.


class AccountAdmin(UserAdmin):
    ordering = ["email"]
    list_display = [
        "email",
        "first_name",
        "last_name",
        "is_superuser",
        "is_active",
        "date_joined",
        "last_login",
    ]
    filter_horizontal = ()
    filter_vertical = ()
    search_fields = ("email", "is_staff")
    list_filter = ("is_active", "is_staff")
    fieldsets = ()
    readonly_fields = ("id", "date_joined", "last_login")


admin.site.register(User, AccountAdmin)
