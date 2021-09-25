from django.db import models

PLANNED = 'Запланировано'
TODAY = 'Сегодня'
FINISHED = 'Проведено'

STATUS_CHOICES = [
    (PLANNED, 'Запланировано'),
    (TODAY, 'Сегодня'),
    (FINISHED, 'Проведено')
]

class Event(models.Model):
    title = models.CharField(
        verbose_name='Название мероприятия', max_length=150)
    description = models.TextField(verbose_name='Описание мероприятия')
    date_of_event = models.DateField(verbose_name='Дата проведения', auto_now=False, auto_now_add=False)
    place = models.CharField(verbose_name='Место проведения', max_length=150)
    status = models.CharField(verbose_name='Статус', choices=STATUS_CHOICES, default=PLANNED, max_length=50)

    def __str__(self):
        return f'{self.title} {self.date_of_event}'

    class Meta:
        verbose_name = 'Мероприятие'
        verbose_name_plural = 'Мероприятия'


class Gallery(models.Model):
    image = models.ImageField(
        verbose_name='Фото мероприятия', upload_to='images/event_images/')
    event = models.ForeignKey(
        Event, verbose_name='Мероприятие', on_delete=models.CASCADE)