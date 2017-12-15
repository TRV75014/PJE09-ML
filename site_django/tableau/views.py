from django.http import HttpResponse
from django.shortcuts import render
from .forms import genRectForm


def home(request):
	""" Exemple de page HTML, non valide pour que l'exemple soit concis """
	form = genRectForm(request.GET or None)
	if form.is_valid():
		nbRect = form.cleaned_data['nbRect']
		nbRectWhite = form.cleaned_data['nbRectWhite']
	return render(request, 'tableau/page.html', locals())
	
	
def tableau(request, nbRect, nbRectWhite):
    """ Exemple de page HTML, non valide pour que l'exemple soit concis """
    form = genRectForm(request.POST or None)	

    return render(request, 'tableau/page.html', locals())