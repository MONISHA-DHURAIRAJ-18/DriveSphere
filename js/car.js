const params = new URLSearchParams(window.location.search);

const carKey = params.get("car");

const car = cars[carKey];

if(car){

document.getElementById("carImage").src = car.image;

document.getElementById("carName").innerHTML = car.name;

document.getElementById("price").innerHTML = car.price;

document.getElementById("engine").innerHTML = car.engine;

document.getElementById("mileage").innerHTML = car.mileage;

document.getElementById("fuel").innerHTML = car.fuel;

document.getElementById("transmission").innerHTML = car.transmission;

document.getElementById("seating").innerHTML = car.seating;

document.getElementById("color").innerHTML = car.color;

let list="";

car.features.forEach(function(feature){

list += "<li>"+feature+"</li>";

});

document.getElementById("features").innerHTML=list;

}else{

document.body.innerHTML="<h1 style='text-align:center;margin-top:100px;'>Car Details Not Found</h1>";

}