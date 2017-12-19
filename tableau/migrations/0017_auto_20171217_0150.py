# Generated by Django 2.0 on 2017-12-17 00:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tableau', '0016_auto_20171217_0029'),
    ]

    operations = [
        migrations.CreateModel(
            name='data',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('donnee', models.TextField()),
            ],
        ),
        migrations.AlterField(
            model_name='tableaux',
            name='data',
            field=models.ForeignKey(on_delete='cascade', to='tableau.data'),
        ),
    ]
