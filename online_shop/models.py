from django.db import models

# Create your models here.
class Item(models.Model):
    item_name = models.TextField(max_length=30)
    price = models.IntegerField()
    tag = models.IntegerField()
    availability = models.BooleanField()
    description = models.CharField(max_length=255)

class News(models.Model):
    news_title = models.TextField(max_length=20)
    text = models.TextField()
    date = models.DateField()
    author = models.TextField(max_length=10)