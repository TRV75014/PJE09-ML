# Generated by Django 2.0 on 2017-12-16 23:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tableau', '0015_auto_20171217_0015'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tableaux',
            name='data',
            field=models.TextField(null=True),
        ),
    ]
