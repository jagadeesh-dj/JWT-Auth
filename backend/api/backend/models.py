from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class Message(models.Model):
    user=models.ForeignKey(User,on_delete=models.CASCADE,related_name="user")
    sender=models.ForeignKey(User,on_delete=models.CASCADE,related_name="sender")
    receiver=models.ForeignKey(User,on_delete=models.CASCADE,related_name="receiver")
    message=models.TextField()
    is_read=models.BooleanField(default=False)
    timestamp=models.DateTimeField(auto_now_add=True)
