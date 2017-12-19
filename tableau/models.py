from django.db import models

# Create your models here.
class note(models.Model):
	note = models.SmallIntegerField(default=1)
	user = models.CharField(max_length=100, null=True)
class data(models.Model):
	donnee = models.TextField(default='')
		
class tableaux(models.Model):
	nbRect = models.SmallIntegerField(default=1)
	nbRectWhite = models.SmallIntegerField(default=1)
	progressive = models.BooleanField(default=False)
	note = models.ForeignKey(note, on_delete='cascade')
	data = models.ForeignKey(data, on_delete='cascade')
	
