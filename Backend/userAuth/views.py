from .serializers import UserAccountSerializer
from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .models import UserAccount
from rest_framework.response import Response
from rest_framework import status


class UserAccountCreateView(ModelViewSet):
    serializer_class = UserAccountSerializer
    queryset = UserAccount.objects.all()