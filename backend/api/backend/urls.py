from django.urls import path
from .views import UserView,LogoutView,UserList,MessageView,current_user
from rest_framework_simplejwt import views as jwt_views

urlpatterns = [
    path('token/',jwt_views.TokenObtainPairView.as_view(),name="token_pair"),
    path('token/refresh/',jwt_views.TokenRefreshView.as_view(),name="token_refresh"),
    path('userview/',UserView.as_view()),
    path('logout/',LogoutView.as_view()),
    path('userlist/',UserList.as_view()),
    path('message/<str:sender_id>/<str:receiver_id>/',MessageView.as_view()),
    path('login_user/',current_user.as_view())
]

