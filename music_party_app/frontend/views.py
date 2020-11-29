from django.shortcuts import render

# Create your views here.
def index(requests, *args, **kwargs):
    return render(requests, 'frontend/index.html')
