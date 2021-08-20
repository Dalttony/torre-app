from django.contrib import admin
from django.urls import path
from . import views
urlpatterns = [
    path("search/", views.search),
    path("jobs/<str:id>", views.jobs),
    path("users/<str:username>", views.users)
]
