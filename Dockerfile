# Используем базовый образ PHP с Apache
FROM php:7.3-apache

# Устанавливаем локали
RUN apt-get update && apt-get install -y locales \
    && locale-gen en_US.UTF-8 \
    && locale-gen ru_RU.UTF-8

# Устанавливаем UTF-8 как стандартную локаль
ENV LANG en_US.UTF-8
ENV LANGUAGE en_US:en
ENV LC_ALL en_US.UTF-8

# Устанавливаем необходимые расширения PHP
RUN docker-php-ext-install mysqli pdo pdo_mysql

# Включаем модули Apache
RUN a2enmod rewrite
