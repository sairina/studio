# -*- coding: utf-8 -*-
# Generated by Django 1.9.7 on 2016-09-15 19:06
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('contentcuration', '0015_auto_20160914_1640'),
    ]

    operations = [
        migrations.AlterField(
            model_name='invitation',
            name='email',
            field=models.EmailField(max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='invitation',
            name='sender',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='sent_by', to=settings.AUTH_USER_MODEL),
        ),
    ]
