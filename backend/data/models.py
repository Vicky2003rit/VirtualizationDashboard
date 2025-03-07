from django.db import models

class Data(models.Model):
    end_year = models.CharField(max_length=4, blank=True, null=True)
    intensity = models.IntegerField()
    sector = models.CharField(max_length=255)
    topic = models.CharField(max_length=255)
    insight = models.TextField()
    url = models.URLField(max_length=200)
    region = models.CharField(max_length=255, blank=True, null=True)
    start_year = models.CharField(max_length=4, blank=True, null=True)
    impact = models.TextField(blank=True, null=True)
    added = models.DateTimeField(blank=True, null=True)  # DateTimeField
    published = models.DateTimeField(blank=True, null=True)  # DateTimeField
    country = models.CharField(max_length=255, blank=True, null=True)
    relevance = models.IntegerField()
    pestle = models.CharField(max_length=255, blank=True, null=True)
    source = models.CharField(max_length=255)
    title = models.TextField()
    likelihood = models.IntegerField()


    
