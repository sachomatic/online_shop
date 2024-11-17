from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader

# Create your views here.
def home(request):
    template = loader.get_template('home.html')
    return HttpResponse(template.render())

def shop(request):
    template = loader.get_template("buy.html")
    return HttpResponse(template.render())

def news(request):
    template = loader.get_template("news.html")
    return HttpResponse(template.render())

def contact_us(request):
    template = loader.get_template("contact.html")
    return HttpResponse(template.render())

def about(request):
    template = loader.get_template("about.html")
    return HttpResponse(template.render())