CREATE DATABASE drivesphere;

USE drivesphere;

CREATE TABLE contact (

id INT AUTO_INCREMENT PRIMARY KEY,

name VARCHAR(100),

email VARCHAR(100),

subject VARCHAR(150),

message TEXT,

created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);

CREATE TABLE cars (

id INT AUTO_INCREMENT PRIMARY KEY,

brand VARCHAR(50),

model VARCHAR(100),

price VARCHAR(50),

engine VARCHAR(100),

fuel VARCHAR(50),

mileage VARCHAR(50),

transmission VARCHAR(50),

image VARCHAR(255)

);