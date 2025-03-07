from django.contrib import admin
from .models import  Data
admin.site.register(Data)
class Admin(admin.ModelAdmin):
    list_display=[
        'end_year',
        'intensity',
        'sector',
        'topic',
        'insight',
        'url',
        'region',
        'tart_year',
        'impact',
        'added',
        'published',
        'country',
        'relevance',
        'pestle',
        'source',
        'title',
        'likelihood'

    ]

    list_per_page=50
# Register your models here.
