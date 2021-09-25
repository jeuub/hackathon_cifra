from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser


class UserManager(BaseUserManager):
    def create_user(self, email, first_name, last_name,password=None):
        if not email:
            raise ValueError('User must have an email address')
        if not first_name:
            raise ValueError('User must have an first name')
        if not last_name:
            raise ValueError('User must have an last name')

        user = self.model(email=self.normalize_email(email), first_name=first_name, last_name=last_name)

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, first_name, last_name, password):
        user = self.create_user(email=self.normalize_email(
            email), first_name=first_name, last_name=last_name, password=password)

        user.is_admin = True
        user.is_staff = True
        user.is_superuser = True

        user.save(using=self._db)
        return user


class User(AbstractBaseUser):
    email = models.EmailField(verbose_name='Email', unique=True, max_length=254)
    first_name = models.CharField(verbose_name='Имя', max_length=100)
    last_name = models.CharField(verbose_name='Фамилия', max_length=100)
    user_avatar = models.ImageField(verbose_name='Фото пользователя', upload_to='images/users_avatars', blank=True)

    is_admin = models.BooleanField(
        default=False, verbose_name='Администратор?')
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False, verbose_name='Персонал')
    is_superuser = models.BooleanField(default=False)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name',]

    objects = UserManager()

    def has_perm(self, perm, obj=None):
        return self.is_admin

    def has_module_perms(self, app_label):
        return True

    def __str__(self):
        return f'{self.first_name} {self.last_name}'

    class Meta:
        verbose_name = 'Пользователь'
        verbose_name_plural = 'Пользователи'