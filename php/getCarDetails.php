<?php

include "db.php";


$id = $_GET['id'];


$sql = "SELECT * FROM cars WHERE id='$id'";


$result = mysqli_query($conn,$sql);


$data = mysqli_fetch_assoc($result);


echo json_encode($data);


?>