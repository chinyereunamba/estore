from django.contrib import admin

from .models import *

# Register your models here.


class ProductAdmin(admin.ModelAdmin):
    list_display = ["name", "quantity", "brand", "category"]
    list_filter = ["brand", 'category']
    search_fields = ['name']
    readonly_fields = ["product_id"]


admin.site.register(Category)
admin.site.register(Brand)
admin.site.register(Product, ProductAdmin)
