# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2017-12-16 13:21
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='input',
            fields=[
                ('id', models.SmallIntegerField(primary_key=True, serialize=False)),
                ('nbRect', models.SmallIntegerField()),
                ('nbRectWhite', models.SmallIntegerField()),
            ],
        ),
    ]