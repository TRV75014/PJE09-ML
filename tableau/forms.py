# -*- coding: utf-8 -*-
"""
Created on Thu Dec 14 11:41:44 2017

@author: Lenovo
"""

from django import forms
from .models import tableaux, note

class genRectForm(forms.ModelForm):
	class Meta:
		model = tableaux
		fields = ['nbRect', 'nbRectWhite', 'progressive']
		widgets = {
			'nbRect' : forms.NumberInput(attrs={'type':'range', 'step': '1', 'min': '0', 'max': '10'}),
			'nbRectWhite' : forms.NumberInput(attrs={'type':'range', 'step': '1', 'min': '0', 'max': '10'})
		}
class markForm(forms.ModelForm):
	class Meta:
		model = note
		fields = ['user', 'note']
		widgets = {
			'note' : forms.NumberInput(attrs={ 'step': '1', 'min': '1', 'max': '5'})
		}
		