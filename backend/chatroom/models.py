from django.db import models

class Message(models.Model):
    text = models.TextField()
    user = models.ForeignKey('auth.User', on_delete=models.CASCADE)
    chat_room = models.ForeignKey('ChatRoom', on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

class ChatRoom(models.Model):
    name = models.CharField(max_length=255)
