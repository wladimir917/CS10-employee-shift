from django.db import models
from uuid import uuid4
from django.contrib.auth.models import User


class Employer(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    name = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)
    last_modified = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)


class Contact(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    telephone = models.CharField(max_length=10)
    telephone2 = models.CharField(max_length=10)


class Employee(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
   
   
class HourOfOperation(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    start_hour = models.TimeField(auto_now=False, auto_now_add=False)
    end_hour = models.TimeField(auto_now=False, auto_now_add=False)


class Shift(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    start_hour = models.TimeField(auto_now=False, auto_now_add=False)
    end_hour = models.TimeField(auto_now=False, auto_now_add=False)
    status = models.BooleanField(default=True)
  
    

class CalendarDay(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    date = models.DateField(auto_now_add=False)
    status = models.BooleanField(default=True)
    

class Availability(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    date = models.DateField(auto_now_add=False)
    start_hour = models.TimeField(auto_now=False, auto_now_add=False)
    end_hour = models.TimeField(auto_now=False, auto_now_add=False)


class RequestedTimeOff(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    date = models.DateField(auto_now_add=False)
    reason = models.CharField(max_length=200)
    status = models.BooleanField(default=False)
