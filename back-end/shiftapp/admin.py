from django.contrib import admin
from .models import Employer, Employee, HourOfOperation, Shift, Availability, CalendarDay, Day, RequestedTimeOff

# Register your models here.
admin.site.register((Employer, Employee, HourOfOperation, Shift, Availability, CalendarDay, Day, RequestedTimeOff),)
