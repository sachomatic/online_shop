# Generated by Django 5.1.3 on 2024-11-30 14:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('online_shop', '0002_user'),
    ]

    operations = [
        migrations.CreateModel(
            name='Message',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sender', models.CharField(max_length=30)),
                ('object', models.CharField(max_length=50)),
                ('text', models.CharField(max_length=1000)),
            ],
        ),
    ]
