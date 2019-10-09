DROP DATABASE IF EXISTS hotdogs_db;

CREATE DATABASE hotdogs_db;

USE hotdogs_db;

CREATE TABLE hotdogs
(
	id int NOT NULL AUTO_INCREMENT,
	dog_name varchar(75) NOT NULL,
    devoured BOOLEAN NOT NULL,
	PRIMARY KEY (id)
);