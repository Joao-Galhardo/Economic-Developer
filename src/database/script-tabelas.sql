Create database economicDeveloper;

use economicDeveloper;

create table usuario (
idUsuario int primary key auto_increment,
nome varchar(50),
email varchar(50),
senha varchar(20),
dtNasc date,
nivelConhecimento tinyint
constraint nvlConhecimento check (nivelConhecimento in(1,2,3))
);

create table cursos (
idCurso int primary key auto_increment,
nome varchar(20)
);

create table certificado (
fkCurso int,
fkUsuarioCertificado int,
dtEmissao date,
primary key(fkCurso, fkUsuarioCertificado),
constraint fkCurso foreign key (fkCurso) references cursos (idCurso),
constraint fkUsuarioCertificado foreign key (fkUsuarioCertificado) references usuario (idUsuario)
);

create table metas (
idMeta int primary key auto_increment,
titulo varchar(45),
dtInicio date,
dtFinal date,
valorNecessario Decimal(10,2),
fkUsuario int,
constraint fkUsuario foreign key (fkUsuario) references usuario (idUsuario)
);

create table investimentos (
idInvestimento int,
fkMeta int,
primary key (idInvestimento, fkMeta),
valor decimal (10,2),
dtInvestimento date
);