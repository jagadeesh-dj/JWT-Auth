from django.shortcuts import render
from django.contrib.auth.models import User
# Create your views here.
from rest_framework.views import APIView 
from rest_framework.response import Response
from rest_framework import status,generics,permissions
from .serializers import UserSerializer,MessageSerializer
from rest_framework_simplejwt.tokens import RefreshToken
from .models import Message
from rest_framework.decorators import api_view

class UserView(generics.CreateAPIView):
    serializer_class=UserSerializer
    queryset=User.objects.all()
    # def post(self,request):
    #     serializer=UserSerializer(data=request.data)
    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response({"data":serializer.data,"status":status.HTTP_201_CREATED})
        


class UserList(generics.ListAPIView):
    serializer_class=UserSerializer
    # queryset=User.objects.all()
    permission_classes=(permissions.IsAuthenticated,)
    def get_queryset(self):
        current_user=self.request.user
        return User.objects.exclude(id=current_user.id)
    
class LogoutView(APIView):     
    permission_classes = (permissions.IsAuthenticated,)     
    def post(self, request):
        try:               
            refresh_token = request.data["refresh_token"]               
            token = RefreshToken(refresh_token)               
            token.blacklist()               
            return Response(status=status.HTTP_205_RESET_CONTENT)          
        except Exception as e:              
            return Response(status=status.HTTP_400_BAD_REQUEST)

class MessageView(generics.ListAPIView):
    serializer_class=MessageSerializer
    def get_queryset(self):
        sender=self.kwargs['sender_id']
        receiver=self.kwargs['receiver_id']
        message=Message.objects.filter(sender=sender,receiver=receiver) | Message.objects.filter(sender=receiver,receiver=sender)
        return message
    
class UserList(generics.ListAPIView):
    serializer_class=UserSerializer
    # queryset=User.objects.all()
    permission_classes=(permissions.IsAuthenticated,)
    def get_queryset(self):
        current_user=self.request.user
        return User.objects.exclude(id=current_user.id)
    
class LogoutView(APIView):     
    permission_classes = (permissions.IsAuthenticated,)     
    def post(self, request):
        try:               
            refresh_token = request.data["refresh_token"]               
            token = RefreshToken(refresh_token)               
            token.blacklist()               
            return Response(status=status.HTTP_205_RESET_CONTENT)          
        except Exception as e:              
            return Response(status=status.HTTP_400_BAD_REQUEST)

class MessageView(generics.ListAPIView):
    serializer_class=MessageSerializer
    def get_queryset(self):
        sender=self.kwargs['sender_id']
        receiver=self.kwargs['receiver_id']
        message=Message.objects.filter(sender=sender,receiver=receiver) | Message.objects.filter(sender=receiver,receiver=sender)
        return message
    
class current_user(generics.ListAPIView):
    permission_classes=[permissions.IsAuthenticated]
    serializer_class=UserSerializer
    def get_queryset(self):
        user=self.request.user
        return User.objects.filter(id=user.id)