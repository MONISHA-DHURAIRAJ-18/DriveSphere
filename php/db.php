<?php

$host = "localhost";
$user = "root";
$password = "";
$database = "drivesphere";
$port = 3307;


// Database connection

$conn = mysqli_connect(
    $host,
    $user,
    $password,
    $database,
    $port
);


// Check connection

if(!$conn){

    die("Database Connection Failed: " . mysqli_connect_error());

}


?>