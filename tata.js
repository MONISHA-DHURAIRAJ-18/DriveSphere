/* ==========================================
        DriveSphere - Tata Premium JS
                PART 3A
==========================================*/


// ================= TATA CARS DATA =================

const cars = {

    punch:{
        name:"Tata Punch",
        price:"₹6.13 Lakh",
        image:"images/punch.png",

        engine:"1.2L Revotron Petrol",
        power:"86 PS",
        torque:"113 Nm",
        mileage:"20.09 km/l",

        transmission:"5 Speed Manual / AMT",
        fuel:"Petrol",

        colors:[
            "Tornado Blue",
            "Atomic Orange",
            "Daytona Grey",
            "Meteor Bronze"
        ],

        features:[
            "5 Star GNCAP Safety Rating",
            "7 inch Touchscreen",
            "Digital Instrument Cluster",
            "Cruise Control",
            "Rear Camera"
        ],

        description:
        "Tata Punch is a compact SUV offering strong safety, premium design and city-friendly performance."
    },


    tiago:{
        name:"Tata Tiago",
        price:"₹5.00 Lakh",
        image:"images/tiago.png",

        engine:"1.2L Revotron Petrol",
        power:"86 PS",
        torque:"113 Nm",
        mileage:"19.01 km/l",

        transmission:"5 Speed Manual / AMT",
        fuel:"Petrol",

        colors:[
            "Midnight Plum",
            "Daytona Grey",
            "Flame Red",
            "Arizona Blue"
        ],

        features:[
            "Harman Audio System",
            "7 inch Touchscreen",
            "Rear Parking Camera",
            "ABS With EBD",
            "Automatic Climate Control"
        ],

        description:
        "Tata Tiago is a stylish hatchback with excellent mileage, comfort and safety features."
    },


    tigor:{
        name:"Tata Tigor",
        price:"₹6.30 Lakh",
        image:"images/tigor.png",

        engine:"1.2L Revotron Petrol",
        power:"86 PS",
        torque:"113 Nm",
        mileage:"19.28 km/l",

        transmission:"5 Speed Manual / AMT",
        fuel:"Petrol",

        colors:[
            "Magnetic Red",
            "Opal White",
            "Daytona Grey",
            "Arizona Blue"
        ],

        features:[
            "Premium Sedan Design",
            "Large Boot Space",
            "Touchscreen Infotainment",
            "Digital Cluster",
            "Strong Safety"
        ],

        description:
        "Tata Tigor combines sedan comfort with modern technology and reliable performance."
    },


    altroz:{
        name:"Tata Altroz",
        price:"₹6.65 Lakh",
        image:"images/altroz.png",

        engine:"1.2L Petrol / 1.5L Diesel",
        power:"88 PS",
        torque:"200 Nm",

        mileage:"19.33 km/l",

        transmission:
        "5 Speed Manual / DCA",

        fuel:
        "Petrol / Diesel",

        colors:[
            "Opera Blue",
            "Harbour Blue",
            "High Street Gold",
            "Downtown Red"
        ],

        features:[
            "5 Star Safety Rating",
            "Premium Interior",
            "Ambient Lighting",
            "Connected Car Technology",
            "Cruise Control"
        ],

        description:
        "Tata Altroz is a premium hatchback known for safety, design and powerful driving experience."
    },


    nexon:{
        name:"Tata Nexon",
        price:"₹8.15 Lakh",
        image:"images/nexon.png",

        engine:
        "1.2L Turbo Petrol / 1.5L Diesel",

        power:
        "120 PS",

        torque:
        "170 Nm",

        mileage:
        "17.44 km/l",

        transmission:
        "6 Speed Manual / AMT / DCA",

        fuel:
        "Petrol / Diesel",

        colors:[
            "Fearless Purple",
            "Creative Ocean",
            "Daytona Grey",
            "Flame Red"
        ],

        features:[
            "5 Star Safety Rating",
            "10.25 inch Touchscreen",
            "360 Degree Camera",
            "Ventilated Seats",
            "Connected Car Features"
        ],

        description:
        "Tata Nexon is a powerful compact SUV with premium features, performance and outstanding safety."
    }

};



// ================= CHECK DATA =================

console.log(cars);

// ================= PART 3B - MORE TATA CARS =================


cars.nexonEV = {

    name:"Tata Nexon EV",
    price:"₹12.49 Lakh",
    image:"images/nexon-ev.png",

    engine:
    "Permanent Magnet Synchronous Motor",

    power:
    "145 PS",

    torque:
    "215 Nm",

    range:
    "489 km",

    battery:
    "45 kWh",

    charging:
    "Fast Charging Support",

    fuel:
    "Electric",

    colors:[
        "Empowered Oxide",
        "Pristine White",
        "Fearless Purple",
        "Intensi Teal"
    ],

    features:[
        "489 km Driving Range",
        "10.25 inch Touchscreen",
        "Vehicle To Vehicle Charging",
        "360 Degree Camera",
        "Connected EV Technology"
    ],

    description:
    "Tata Nexon EV delivers impressive electric performance with premium features and long range capability."
};



cars.curvv = {

    name:"Tata Curvv",
    price:"₹10.00 Lakh",
    image:"images/curvv.png",

    engine:
    "1.2L Turbo Petrol / 1.5L Diesel",

    power:
    "120 PS",

    torque:
    "170 Nm",

    mileage:
    "17 km/l",

    transmission:
    "6 Speed Manual / DCA",

    fuel:
    "Petrol / Diesel",

    colors:[
        "Virtual Sunrise",
        "Pristine White",
        "Daytona Grey",
        "Flame Red"
    ],

    features:[
        "Coupe SUV Design",
        "Panoramic Sunroof",
        "Premium Dashboard",
        "Digital Cockpit",
        "Advanced Safety System"
    ],

    description:
    "Tata Curvv introduces a futuristic coupe SUV design with premium technology and powerful performance."
};



cars.curvvEV = {

    name:"Tata Curvv EV",
    price:"₹17.49 Lakh",
    image:"images/curvv-ev.png",

    motor:
    "Permanent Magnet Motor",

    power:
    "167 PS",

    torque:
    "215 Nm",

    range:
    "585 km",

    battery:
    "55 kWh",

    charging:
    "DC Fast Charging",

    fuel:
    "Electric",

    colors:[
        "Virtual Sunrise",
        "Pristine White",
        "Pure Grey",
        "Flame Red"
    ],

    features:[
        "585 km Range",
        "ADAS Safety",
        "Panoramic Sunroof",
        "Large Touchscreen",
        "Premium EV Architecture"
    ],

    description:
    "Tata Curvv EV combines futuristic styling with advanced electric technology and long range performance."
};



cars.harrier = {

    name:"Tata Harrier",
    price:"₹15.49 Lakh",
    image:"images/harrier.png",

    engine:
    "2.0L Kryotec Diesel",

    power:
    "170 PS",

    torque:
    "350 Nm",

    mileage:
    "16.8 km/l",

    transmission:
    "6 Speed Manual / Automatic",

    fuel:
    "Diesel",

    colors:[
        "Sunlit Yellow",
        "Ash Grey",
        "Coral Red",
        "Seaweed Green"
    ],

    features:[
        "5 Star Safety Rating",
        "ADAS Level 2",
        "Panoramic Sunroof",
        "Premium Audio System",
        "360 Degree Camera"
    ],

    description:
    "Tata Harrier is a premium SUV offering luxury comfort, strong road presence and powerful diesel performance."
};



cars.safari = {

    name:"Tata Safari",
    price:"₹16.19 Lakh",
    image:"images/safari.png",

    engine:
    "2.0L Kryotec Diesel",

    power:
    "170 PS",

    torque:
    "350 Nm",

    mileage:
    "16.3 km/l",

    transmission:
    "6 Speed Manual / Automatic",

    fuel:
    "Diesel",

    colors:[
        "Cosmic Gold",
        "Stellar Frost",
        "Galactic Sapphire",
        "Orcus White"
    ],

    features:[
        "7 Seater Luxury SUV",
        "ADAS Safety",
        "Panoramic Sunroof",
        "Ventilated Seats",
        "Premium JBL Audio"
    ],

    description:
    "Tata Safari is a flagship SUV offering spacious seating, luxury features and commanding performance."
};



console.log("All Tata Models Loaded");

/* ==========================================
        DriveSphere - Tata Premium JS
                PART 3C
        FUNCTIONS & LOGIC
==========================================*/


// ================= SELECT CAR =================

function showCar(carName){

    const car = cars[carName];


    if(!car){
        console.log("Car not found");
        return;
    }


    const details = document.getElementById("carDetails");


    if(details){

        details.innerHTML = `

        <div class="details-box">

            <h2>${car.name}</h2>

            <p>
            ${car.description}
            </p>


            <table class="spec-table">

                <tr>
                    <td>Price</td>
                    <td>${car.price}</td>
                </tr>


                <tr>
                    <td>Engine</td>
                    <td>${car.engine || car.motor}</td>
                </tr>


                <tr>
                    <td>Power</td>
                    <td>${car.power}</td>
                </tr>


                <tr>
                    <td>Torque</td>
                    <td>${car.torque}</td>
                </tr>


                <tr>
                    <td>Mileage / Range</td>
                    <td>${car.mileage || car.range}</td>
                </tr>


                <tr>
                    <td>Transmission</td>
                    <td>${car.transmission || car.charging}</td>
                </tr>


                <tr>
                    <td>Fuel Type</td>
                    <td>${car.fuel}</td>
                </tr>


            </table>


            <h3 class="feature-title">
                Premium Features
            </h3>


            <div class="feature-grid">

            ${
                car.features.map(feature=>`

                    <div class="feature-card">

                        <h3>
                        ✓
                        </h3>

                        <p>
                        ${feature}
                        </p>

                    </div>


                `).join("")
            }

            </div>


            <h3 class="feature-title">
                Available Colors
            </h3>


            <div class="feature-grid">

            ${
                car.colors.map(color=>`

                <div class="feature-card">

                    <p>
                    ${color}
                    </p>

                </div>

                `).join("")
            }


            </div>


        </div>

        `;


    }


    // Scroll to details

    document
    .getElementById("details")
    ?.scrollIntoView({

        behavior:"smooth"

    });


}




// ================= EMI CALCULATOR =================


function calculateEMI(){


    let price =
    Number(
        document.getElementById("carPrice")?.value
    );


    let downPayment =
    Number(
        document.getElementById("downPayment")?.value
    );


    let interest =
    Number(
        document.getElementById("interest")?.value
    );


    let years =
    Number(
        document.getElementById("years")?.value
    );


    if(!price || !years){

        document.getElementById("emiResult").innerHTML =
        "Enter Details";

        return;

    }



    let loanAmount =
    price - downPayment;



    let monthlyRate =
    interest / 12 / 100;



    let months =
    years * 12;



    let emi =

    (
        loanAmount *
        monthlyRate *
        Math.pow(
            1+monthlyRate,
            months
        )

    )

    /

    (

        Math.pow(
            1+monthlyRate,
            months
        )
        -1

    );



    document.getElementById("emiResult").innerHTML =

    "₹ " + Math.round(emi) + " / Month";


}




// ================= BOOKING =================


function bookCar(carName){


    alert(

    "Thank you for choosing "
    + cars[carName].name
    +
    ". Our team will contact you soon."

    );


}





// ================= SEARCH FUNCTION =================


function searchCar(){


    let input =

    document
    .getElementById("search")
    .value
    .toLowerCase();



    let result = Object.values(cars)
    .filter(car =>

        car.name
        .toLowerCase()
        .includes(input)

    );



    console.log(result);


}




// ================= PAGE LOAD =================


window.onload = ()=>{


    console.log(
    "DriveSphere Tata System Ready 🚗"
    );


};