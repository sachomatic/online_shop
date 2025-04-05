from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.template import loader
from .models import News, User, Item, Message
import json,sqlite3

# Create your views here.
def home(request):
    template = loader.get_template('home.html')
    return HttpResponse(template.render())

def shop(request):
    items = Item.objects.all().values()
    return render(request,"buy.html", {"items": items})

def news(request):
    news = News.objects.all().values()
    return render(request,"news.html", {"news": news})

def contact_us(request):
    template = loader.get_template("contact.html")
    return HttpResponse(template.render())

def about(request):
    template = loader.get_template("about.html")
    return HttpResponse(template.render())

def login(request):
    template = loader.get_template("login.html")
    return HttpResponse(template.render())

def mail(request):
    if request.method == "POST":
        # Access data sent in the request
        data = json.loads(request.body)
        name = data.get('name', 'default name')
        obj = data.get('object', 'default object')
        text = data.get('text', 'default text')
        anonymous = data.get('anonymous', 'default anonymous')

        print(f"Received POST request : {data}")

        # Process the data
        message = Message(sender=name,object=obj,text=text,anonymous=anonymous)
        message.save()
        
        return JsonResponse({"message": "Success"}, status=200)
    print(f"Received invalid request")
    return JsonResponse({"error": "Invalid request method"}, status=405)