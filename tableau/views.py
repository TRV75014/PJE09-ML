from django.http import HttpResponse
from django.shortcuts import render
from .forms import genRectForm, markForm
from .models import data

def tableau(request):
	json = data(donnee=request.body.decode('utf-8'))
	json.save()
	form = genRectForm(request.GET or None)
	notes = markForm(request.POST or None)

	
	if form.is_valid():
		nbRect = form.cleaned_data['nbRect']		
		nbRectWhite = form.cleaned_data['nbRectWhite']
		progressive = form.cleaned_data['progressive']
		if progressive == True:
			progressif = 'true'
		else:
			progressif= 'false'
		f=form.save(commit=False)
	
	if notes.is_valid():	
		user = notes.cleaned_data['user']
		note = notes.cleaned_data['note']
		f.note = notes.save(commit=True)
		f.data = json
		f.data_id -= 1
		f.save()
	return render(request, 'tableau/page.html', locals())