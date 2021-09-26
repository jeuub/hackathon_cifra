from django.db import models
from authentication.models import User

class Initiative(models.Model):
    creator = models.ForeignKey("authentication.User", verbose_name="Создатель", on_delete=models.CASCADE, default=1)
    title = models.CharField(
        verbose_name='Название инициативы', max_length=150)
    description = models.TextField(verbose_name='Описание инициативы')
    current_amount_of_signatures = models.IntegerField(
        verbose_name='Нынешнее количество подписей', default=0, blank=True)
    required_amount_of_signatures = models.IntegerField(
        verbose_name='Необходимое количество подписей', default=10, blank=True)

    def get_total_signatures(self):
        return self.signatures.count()

    def __str__(self):
        return f'{self.id}. {self.title}'

    class Meta:
        verbose_name = 'Инициатива'
        verbose_name_plural = 'Инициативы'


class Signature(models.Model):
    user = models.ForeignKey(User, verbose_name='Пользователь',
                             related_name='user_signature', on_delete=models.CASCADE, default=0)
    initiative = models.ForeignKey(
        Initiative, verbose_name='Инициатива', related_name='signatures', on_delete=models.CASCADE, default=0)

    def __str__(self):
        return f'{self.id}'

    class Meta:
        verbose_name = 'Подпись'
        verbose_name_plural = 'Подписи'


class Gallery(models.Model):
    image = models.ImageField(
        verbose_name='Фото инициативы', upload_to='images/initiative_images/')
    initiative = models.ForeignKey(
        Initiative, verbose_name='Инициатива', on_delete=models.CASCADE)
