# backend/estore/commands/createsu.py

from django.conf import global_settings
from django.core.management.base import BaseCommand

User = global_settings.AUTH_USER_MODEL

class Command(BaseCommand):
    help = "Creates a superuser."

    def handle(self, *args, **options):
        if not User.objects.filter(username="admin").exists():
            User.objects.create_superuser(
                username="admin", password="complexpassword123"
            )
        print("Superuser has been created.")
