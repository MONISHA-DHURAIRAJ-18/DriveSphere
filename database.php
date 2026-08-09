<?php
$host = "localhost";
$user = "root";
$password = "";
$database = "drivesphere";
$port = 3307;

$conn = mysqli_connect($host, $user, $password, $database, $port);

if (!$conn) {
    die("Connection Failed: " . mysqli_connect_error());
}

echo "Database Connected Successfully!";
?>