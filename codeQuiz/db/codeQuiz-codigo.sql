create database kahoot;
use kahoot;

create table userTable (
	idUser int primary key auto_increment,
    userName varchar(100) not null,
    userEmail varchar(100) not null,
    userPassword varchar(50) not null,
    userPoints int not null,
    userType int not null
) auto_increment = 1;

create table userTable(
	idUserType int primary key auto_increment,
    userType int,
    foreign key (idUserType) references userTable(idUser)
)auto_increment = 1;

create table quizTable (
	idQuiz int primary key auto_increment,
    quizName varchar(75) not null,
    quizDate datetime not null,
    quizTheme varchar(100) not null,
	fkUser int,
    foreign key (fkUser) references userTable(idUser)
) auto_increment = 1;

create table questionTable (
	idQuestion int primary key auto_increment,
    question varchar(150) not null,
    questionPoints int not null,
    fkUser int,
    foreign key (fkUser) references quizTable(idUser)
) auto_increment =1;

create table answerTable(
idAnswer int primary key auto_increment,
fkUser int,
    foreign key (fkUser) references answerTable(idUser)

)










