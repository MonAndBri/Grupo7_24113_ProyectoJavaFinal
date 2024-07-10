create database proyectojava_24113_g7;
use proyectojava_24113_g7;

drop table RegistroUsuariosG7;

CREATE TABLE RegistroUsuariosG7 (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(40) not null,
    apellido VARCHAR(40) not null,
    email VARCHAR(50) UNIQUE,
    ciudad VARCHAR(50) ,
    telefono VARCHAR(20) not null,
    provincia VARCHAR(50)
);

create table loginG7 (
	id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(50),
    contrasena VARCHAR(50)
);
insert into loginG7 (email,contrasena) values ('admin@prueba.com','admin');
select * from loginG7;

select * from RegistroUsuariosG7;