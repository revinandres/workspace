create database ejemplo;
use ejemplo;

create table usuario (
id int primary key,
nombre varchar(50),
fecha date,
contraseña varchar(50)
);

create table archivo (
id int primary key,
nombre varchar(50),
tipo varchar(20),
carpeta varchar(50)
);
