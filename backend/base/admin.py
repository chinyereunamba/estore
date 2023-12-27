from django.contrib import admin

from .models import *

# Register your models here.


class ProductAdmin(admin.ModelAdmin):
    list_display = ["name", "quantity", "brand", "category"]
    list_filter = ["brand", "category"]
    search_fields = ["name"]
    readonly_fields = ["product_id"]


class OrderAdmin(admin.ModelAdmin):
    list_display = ["user", "order_number", "date_ordered"]
    list_filter = ["user"]
    search_fields = ["order_number"]
    readonly_fields = ["order_number"]


class OrderItemAdmin(admin.ModelAdmin):
    list_display = ["order", "product"]


class ProductImageAdmin(admin.ModelAdmin):
    list_display = ["name", "date_added"]
    list_filter = ["name"]

class ReviewAdmin(admin.ModelAdmin):
    list_display = ['user', 'product', 'date_created']
    list_filter = ['product']


admin.site.register(Category)
admin.site.register(Brand)
admin.site.register(Product, ProductAdmin)
admin.site.register(ProductImage, ProductImageAdmin)
admin.site.register(Order, OrderAdmin)
admin.site.register(Review, ReviewAdmin)