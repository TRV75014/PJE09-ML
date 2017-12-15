from django.db import models

# Create your models here.
class tableau(models.Model):
    user = models.CharField(max_length=42)
    note = models.SmallIntegerField()
    
    def __str__(self):
        return str(self.note)

class input(models.Model):
    nb_rect_blanc = models.SmallIntegerField()
    nb_rect_noir = models.SmallIntegerField()