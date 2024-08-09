from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth.password_validation import validate_password
from .models import Message
class UserSerializer(serializers.ModelSerializer):
    password=serializers.CharField(write_only=True,required=True,validators=[validate_password])
    class Meta:
        model=User
        fields=['id','username','email','password']
    def  create(self, validate_data):
        user=User.objects.create(username=validate_data['username'],email=validate_data['email'])
        user.set_password(validate_data['password'])
        user.save()
        return user
    
class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model=Message
        fields=("__all__")
        