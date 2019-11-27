SET NAMES UTF8;

DROP DATABASE IF EXISTS tcdj;

create database tcdj charset="utf8";

use tcdj;

create table tcdj_register(
	eid int primary key AUTO_INCREMENT,
	uname varchar(18),
	upwd varchar(18),
	cpwd varchar(18),
	email varchar(20),
	iphone varchar(11),
	username varchar(10)
);

create table tcdj_index_lunbo(
	pid int primary key AUTO_INCREMENT,
	dir varchar(128)
);
create table tcdj_index_xlunbo(
	pid int primary key AUTO_INCREMENT,
	dir1 varchar(128)
);