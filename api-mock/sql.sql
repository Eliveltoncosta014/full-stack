-- Criar o banco de dados 
create database copa_mundo;

-- Cria a tabela 'selecoes' com 3 colunas 
create table selecoes(
	id int auto_increment primary key, -- ID único que aumenta automaticamente  
    selecao varchar(100) not null, -- Nome da seleção, texto até 100 caracteres 
    grupo char(1) not null -- Grupo da seleção apenas 1 letra(A,B,C)
);

select *from selecoes ;


-- Insere várias seleções de uma vez na tabela 
insert into selecoes (selecao, grupo) value 
('Brasil', 'A'),
('França','B'),
('Ilhas Salomão','C'),
('Niféria', 'D'),
('Nova Zelândia','E'),
('japão','F');

select *from selecoes;