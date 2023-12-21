from typing import Any
from django.db import models
from django.contrib.auth.models import (
    BaseUserManager,
    AbstractBaseUser,
    PermissionsMixin,
)
from django.utils.translation import gettext_lazy as _

# Create your models here.


class MyAccountManager(BaseUserManager):
    def _create(self, email, password=None, **extra_fields) -> Any:
        if not email:
            raise ValueError(_("Users must have an Email Address"))

        email = self.normalize_email(email)

        user = self.model(email=email, **extra_fields)

        user.set_password(password)
        user.save(using=self._db)

        return user

    def create_superuser(self, email, password=None, **extra_fields) -> Any:
        user = self._create(email=email, password=password, **extra_fields)

        user.is_admin = True
        user.is_staff = True
        user.is_superuser = True

        user.save(using=self._db)

        return user


class User(AbstractBaseUser, PermissionsMixin):
    username = None
    email = models.EmailField(
        _("Email Address"), unique=True, max_length=80, blank=False, null=False
    )
    first_name = models.CharField(_("First Name"), max_length=80, blank=True, null=True)
    last_name = models.CharField(_("Last Name"), max_length=80, blank=True, null=True)
    dob = models.DateField(_("Date of Birth"), blank=True, null=True)
    phone_number = models.CharField(_("Phone"), max_length=16, blank=True, null=True)

    address = models.TextField(
        blank=True, null=True, verbose_name=_("Address Information")
    )

    date_joined = models.DateTimeField(auto_now_add=True)
    last_login = models.DateTimeField(auto_now=True)

    is_active = models.BooleanField(default=True)
    is_superuser = models.BooleanField(default=False)
    is_admin = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)

    objects = MyAccountManager()
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

    class Meta:
        verbose_name = "User"
        verbose_name_plural = "Users"

    def __str__(self) -> str:
        return self.email

    def has_module_perms(self, app_label):
        return True

    def has_perm(self, obj=None):
        return self.is_admin
