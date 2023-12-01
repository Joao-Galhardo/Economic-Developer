create database economicdeveloper;

use economicdeveloper;

create table usuario (
idUsuario int primary key auto_increment,
nome varchar(50),
email varchar(50),
senha varchar(20),
dtNasc date,
nivelConhecimento int,
constraint nvlConhecimento check (nivelConhecimento in(1,2,3))
);

create table certificado (
idCertificado int auto_increment,
fkUsuarioCertificado int,
primary key (idCertificado, fkUsuarioCertificado),
constraint fkUsuarioCertificado foreign key (fkUsuarioCertificado) references usuario (idUsuario)
);

create table metas (
idMeta int auto_increment,
titulo varchar(45),
dtInicio date,
dtFinal date,
valorTotal Decimal(10,2),
valorInicial Decimal(10,2),
valorAtual Decimal(10,2),
fkUsuario int,
constraint fkUsuario foreign key (fkUsuario) references usuario (idUsuario),
primary key	(idMeta, fkUsuario)
);

create table investimentos (
idInvestimento int auto_increment,
fkMeta int,
fkUsuarioInvestimento int,
primary key (idInvestimento, fkMeta, fkUsuarioInvestimento),
constraint fkUsuarioInvestimento foreign key (fkUsuarioInvestimento) references metas (fkUsuario),
constraint fkMetas foreign key (fkMeta) references metas (idMeta),
valor decimal (10,2),
dtInvestimento date
);
