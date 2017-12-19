# -*- coding: utf-8 -*-
"""
Created on Thu Nov  9 11:13:48 2017

@author: Lenovo
"""

from django.conf.urls import url
from . import views

urlpatterns = [
	url(r'^tableau/', views.tableau, name='tableau'),
]