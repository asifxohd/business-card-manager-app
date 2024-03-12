from rest_framework import serializers
from django.contrib.auth.password_validation import validate_password
from django.core.exceptions import ValidationError
from django.contrib.auth import get_user_model

User = get_user_model()

class UserAccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("id", "fullname", "email", "password", "username")

    def validate(self, data):
        password = data.get("password")
        try:
            validate_password(password, self.instance)
        except ValidationError as e:
            raise serializers.ValidationError(
                {"password": serializers.as_serializer_error(e)["non_field_errors"]}
            )
        return data

    def create(self, validated_data):
        return User.objects.create_user(**validated_data)
