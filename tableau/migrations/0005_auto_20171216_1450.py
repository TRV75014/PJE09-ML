# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2017-12-16 13:50
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tableau', '0004_auto_20171216_1443'),
    ]

    operations = [
        migrations.AlterField(
            model_name='output',
            name='id',
            field=models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]