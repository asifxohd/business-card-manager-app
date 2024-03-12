from django.urls import path,include
from .import views
from rest_framework import routers


userAuth  = routers.DefaultRouter()
userAuth.register(r'register-user', views.UserAccountCreateView, basename='register-user')

# urlpatterns = [
#     path('register-user', UserAccountCreateView.as_view({'post': 'create'}), name='user-account-list'),
# ]

urlpatterns = [
    path('', include(userAuth.urls)),
]