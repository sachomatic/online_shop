# Generated by Django 5.1.3 on 2024-11-23 10:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('online_shop', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(max_length=10)),
                ('password', models.CharField(max_length=15)),
                ('admin', models.BooleanField()),
            ],
        ),
    ]
