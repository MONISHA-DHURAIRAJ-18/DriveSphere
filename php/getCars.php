<?php

header("Content-Type: application/json");


$conn = new mysqli(
"127.0.0.1",
"root",
"",
"drivesphere",
3307
);


if($conn->connect_error){

echo json_encode([
"error"=>"Database connection failed"
]);

exit();

}



$brand = $_GET['brand'];



$sql = "SELECT * FROM cars WHERE brand='$brand'";


$result = $conn->query($sql);



$cars=[];



while($row = $result->fetch_assoc()){

$cars[]=$row;

}



echo json_encode($cars);



$conn->close();


?>