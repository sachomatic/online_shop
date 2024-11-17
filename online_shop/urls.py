from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('buy/', views.shop, name='store'),
    path('news/', views.news, name='news'),
    path('contact/', views.contact_us, name="contact us"),
    path('about/', views.about, name="about")
]