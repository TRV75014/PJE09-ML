# -*- coding: utf-8 -*-
"""
Created on Thu Dec 14 11:41:44 2017

@author: Lenovo
"""

from django import forms

class genRectForm(forms.Form):
    nbRect = forms.IntegerField(widget=forms.NumberInput(attrs={'type':'range', 'step': '1', 'min': '1', 'max': '10'}))
    nbRectWhite = forms.IntegerField(widget=forms.NumberInput(attrs={'type':'range', 'step': '1', 'min': '1', 'max': '10'}))