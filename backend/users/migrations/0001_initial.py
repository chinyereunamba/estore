# Generated by Django 5.0 on 2023-12-18 23:33

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ("auth", "0012_alter_user_first_name_max_length"),
    ]

    operations = [
        migrations.CreateModel(
            name="User",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("password", models.CharField(max_length=128, verbose_name="password")),
                (
                    "email",
                    models.EmailField(
                        max_length=80, unique=True, verbose_name="Email Address"
                    ),
                ),
                (
                    "first_name",
                    models.CharField(
                        blank=True, max_length=80, null=True, verbose_name="First Name"
                    ),
                ),
                (
                    "last_name",
                    models.CharField(
                        blank=True, max_length=80, null=True, verbose_name="Last Name"
                    ),
                ),
                (
                    "dob",
                    models.DateField(
                        blank=True, null=True, verbose_name="Date of Birth"
                    ),
                ),
                (
                    "phone_number",
                    models.CharField(
                        blank=True, max_length=16, null=True, verbose_name="Phone"
                    ),
                ),
                (
                    "address",
                    models.TextField(
                        blank=True, null=True, verbose_name="Address Information"
                    ),
                ),
                ("date_joined", models.DateTimeField(auto_now_add=True)),
                ("last_login", models.DateTimeField(auto_now=True)),
                ("is_active", models.BooleanField(default=True)),
                ("is_superuser", models.BooleanField(default=False)),
                ("is_admin", models.BooleanField(default=False)),
                ("is_staff", models.BooleanField(default=False)),
                (
                    "groups",
                    models.ManyToManyField(
                        blank=True,
                        help_text="The groups this user belongs to.",
                        related_name="user_set",
                        related_query_name="user",
                        to="auth.group",
                        verbose_name="groups",
                    ),
                ),
                (
                    "user_permissions",
                    models.ManyToManyField(
                        blank=True,
                        help_text="Specific permissions for this user.",
                        related_name="user_set",
                        related_query_name="user",
                        to="auth.permission",
                        verbose_name="user permissions",
                    ),
                ),
            ],
            options={
                "abstract": False,
            },
        ),
    ]
