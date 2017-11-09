from django.http import HttpResponse
from django.shortcuts import render

def tableau(request):
    """ Exemple de page HTML, non valide pour que l'exemple soit concis """
    return render(request, 'tableau/page.html', locals())