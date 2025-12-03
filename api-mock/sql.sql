-- Cria o banco de dados onde vamos trabalhar 
create database sistema_produtos;

use sistema_produtos;

-- Cria a tabela "produtos" com algumas colunas básicas 
create table produtos(
	id int auto_increment primary key, -- ID ÚNICO
    nome varchar(100) not null, -- Nome produto 
	email varchar(120) not null, -- Email (exemplo genérico)
    telefone varchar(20), -- Telefone
    cpf varchar (14), -- cpf
    endereco varchar(150) -- Endereco simples 
);
-- Insere dois registro
insert into produtos(nome, email, telefone, cpf, endereco) value
("Eduardo Ramos ", "edu-ramos@gmail.com", "1196262-5537", "421.624.787-98", "rua outros ..."),
("Juliana Clara", "juliana@outros@gmail.com", "1198080-7676","411.323.423-42","rua outros ff"),
("Gabriel Costa", "gabcosta@outros.com", "1190909-8998", "242.098.039-23", "rua candido");
-- Selecionar o registro onde o id=1
select *from produtos where id =2;

select *from produtos;