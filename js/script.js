

// ================= GET CAR FROM URL =================


const params = new URLSearchParams(window.location.search);


const carKey = params.get("car");



const car = cars[carKey];





// ================= LOAD CAR DETAILS =================



if(car){



document.getElementById("carImage").src = car.image;



document.getElementById("carName").innerHTML = car.name;



document.getElementById("description").innerHTML = car.description;



document.getElementById("price").innerHTML = car.price;



document.getElementById("fuel").innerHTML = car.fuel;



document.getElementById("engine").innerHTML = car.engine;



document.getElementById("engine2").innerHTML = car.engine;



document.getElementById("power").innerHTML = car.power;



document.getElementById("power2").innerHTML = car.power;



document.getElementById("torque").innerHTML = car.torque;



document.getElementById("mileage").innerHTML = car.mileage;



document.getElementById("transmission").innerHTML = car.transmission;



document.getElementById("seating").innerHTML = car.seating;



document.getElementById("boot").innerHTML = car.boot;



document.getElementById("safety").innerHTML = car.safety;



document.getElementById("color").innerHTML = car.color;






// ================= FEATURES =================



let featureHTML="";



car.features.forEach(function(item){


featureHTML +=

`

<li>
✔ ${item}
</li>

`;


});



document.getElementById("featuresList").innerHTML = featureHTML;



}



else{


document.body.innerHTML =

`

<h1 style="
text-align:center;
margin-top:100px;
color:#D4AF37;
">

Car Details Not Found

</h1>

`;

}







// ================= EMI CALCULATOR =================



function calculateEMI(){



let price =

Number(document.getElementById("emiPrice").value);



let down =

Number(document.getElementById("emiDown").value);



let years =

Number(document.getElementById("emiYears").value);



let rate =

Number(document.getElementById("emiRate").value);





let loanAmount = price - down;



let monthlyInterest = rate/(12*100);



let months = years*12;




let emi =


(loanAmount *

monthlyInterest *

Math.pow(1+monthlyInterest,months))

/

(Math.pow(1+monthlyInterest,months)-1);






document.getElementById("emiResult").innerHTML =

"₹ " + Math.round(emi) + " / Month";



}