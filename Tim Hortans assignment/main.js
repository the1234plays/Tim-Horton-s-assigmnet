// Tim Hortans Simulator - By Arnav Gupta

// Global Variables

let numPlayagain = 0;
let numFreeCoffee = 0;
let numFreeDonut = 0;
let numGrandprize = 0;




// Add Event Listeners
//BC
document.getElementById("BCsim").addEventListener("click", BCbtn);
document.getElementById('BCplus5').addEventListener('click', BCplus5);
document.getElementById('BC until grandprize').addEventListener('click', Bcuntilgrandprize);
document.getElementById("BCuntil 500 donuts").addEventListener("click", BCuntil500donuts);

//ALBERTA
document.getElementById("Albertasim").addEventListener("click", Albertabtn);
document.getElementById('Albertaplus5').addEventListener('click', Albertaplus5);
document.getElementById('Alberta until grandprize').addEventListener('click', Albertauntilgrandprize);
document.getElementById("Alberta until 500 donuts").addEventListener("click", Albertauntil500donuts);

// Saskatchewan

document.getElementById("Saskatchewansim").addEventListener("click", Saskatchewanbtn);
document.getElementById('Saskatchewanplus5').addEventListener('click', Saskatchewanplus5);
document.getElementById('Saskatchewan until grandprize').addEventListener('click', Saskatchewanuntilgrandprize);
document.getElementById("Saskatchewan until 500 donuts").addEventListener("click", Saskatchewanuntil500donuts);




//BC simulation
//event Functions
function BCbtn() {
    // Simulate the result of getting it once

    //generate Random number
    let randNum = Math.random();

    //Simulate Results
    if (randNum < 0.7) {
        console.log("Play again")
        numPlayagain ++
        document.getElementById("playAgain").innerHTML = numPlayagain;
        document.getElementById("results").innerHTML += "Play again |"

    } else if (randNum < 0.8) {
        console.log("Free coffee")
        numFreeCoffee++
        document.getElementById("freeCoffee").innerHTML = numFreeCoffee;
        document.getElementById("results").innerHTML += "Free Coffee |"


    } else if (randNum < 0.9) {
        console.log("Free Dout ")
        numFreeDonut++
        document.getElementById("freeDonut").innerHTML = numFreeDonut;
        document.getElementById("results").innerHTML += "Free Donut |"


        
    } else {
        console.log(" grand")
        numGrandprize++
        document.getElementById("grandprize").innerHTML = numGrandprize;
        document.getElementById("results").innerHTML += "Grandprize |"


    }
}

function BCplus5 () {
    for (let n = 0; n < 5; n++) {
        BCbtn();
}
}

function BCuntil500donuts() {
    while (numFreeDonut < 50) {
        BCbtn();
    }
}

function Bcuntilgrandprize() {
    while (numGrandprize < 1)
    BCbtn()
}

//Canada simulation


//event Functions
function Albertabtn() {
    // Simulate the result of getting it once

    //generate Random number
    let randNum = Math.random();

    //Simulate Results
    if (randNum < 0.15) {
        console.log("Play again")
        numPlayagain ++
        document.getElementById("playAgain").innerHTML = numPlayagain;
        document.getElementById("results").innerHTML += "Play again |"

    } else if (randNum < 0.55) {
        console.log("Free coffee")
        numFreeCoffee++
        document.getElementById("freeCoffee").innerHTML = numFreeCoffee;
        document.getElementById("results").innerHTML += "Free Coffee |"


    } else if (randNum < 0.95) {
        console.log("Free Dout ")
        numFreeDonut++
        document.getElementById("freeDonut").innerHTML = numFreeDonut;
        document.getElementById("results").innerHTML += "Free Donut |"


        
    } else {
        console.log(" grand")
        numGrandprize++
        document.getElementById("grandprize").innerHTML = numGrandprize;
        document.getElementById("results").innerHTML += "Grandprize |"


    }
}

function Albertaplus5 () {
    for (let n = 0; n < 5; n++) {
        Albertabtn();
}
}

function Albertauntil500donuts() {
    while (numFreeDonut < 50) {
        Albertabtn();
    }
}

function Albertauntilgrandprize() {
    while (numGrandprize < 1)
    Albertabtn()
}

//Canada simulation


//event Functions
function Albertabtn() {
    // Simulate the result of getting it once

    //generate Random number
    let randNum = Math.random();

    //Simulate Results
    if (randNum < 0.15) {
        console.log("Play again")
        numPlayagain ++
        document.getElementById("playAgain").innerHTML = numPlayagain;
        document.getElementById("results").innerHTML += "Play again |"

    } else if (randNum < 0.55) {
        console.log("Free coffee")
        numFreeCoffee++
        document.getElementById("freeCoffee").innerHTML = numFreeCoffee;
        document.getElementById("results").innerHTML += "Free Coffee |"


    } else if (randNum < 0.95) {
        console.log("Free Dout ")
        numFreeDonut++
        document.getElementById("freeDonut").innerHTML = numFreeDonut;
        document.getElementById("results").innerHTML += "Free Donut |"


        
    } else {
        console.log(" grand")
        numGrandprize++
        document.getElementById("grandprize").innerHTML = numGrandprize;
        document.getElementById("results").innerHTML += "Grandprize |"


    }
}

function Albertaplus5 () {
    for (let n = 0; n < 5; n++) {
        Albertabtn();
}
}

function Albertauntil500donuts() {
    while (numFreeDonut < 50) {
        Albertabtn();
    }
}

function Albertauntilgrandprize() {
    while (numGrandprize < 1)
    Albertabtn()
}

//Saskatchewan simulation


//event Functions
function Saskatchewanbtn() {
    // Simulate the result of getting it once

    //generate Random number
    let randNum = Math.random();

    //Simulate Results
    if (randNum < 0.7) {
        console.log("Play again")
        numPlayagain ++
        document.getElementById("playAgain").innerHTML = numPlayagain;
        document.getElementById("results").innerHTML += "Play again |"

    } else if (randNum < 0.71) {
        console.log("Free coffee")
        numFreeCoffee++
        document.getElementById("freeCoffee").innerHTML = numFreeCoffee;
        document.getElementById("results").innerHTML += "Free Coffee |"


    } else if (randNum < 0.72) {
        console.log("Free Dout ")
        numFreeDonut++
        document.getElementById("freeDonut").innerHTML = numFreeDonut;
        document.getElementById("results").innerHTML += "Free Donut |"


        
    } else {
        console.log(" grand")
        numGrandprize++
        document.getElementById("grandprize").innerHTML = numGrandprize;
        document.getElementById("results").innerHTML += "Grandprize |"


    }
}

function Saskatchewanplus5 () {
    for (let n = 0; n < 5; n++) {
        Saskatchewanbtn();
}
}

function Saskatchewanuntil500donuts() {
    while (numFreeDonut < 50) {
        Saskatchewanbtn();
    }
}

function Saskatchewanuntilgrandprize() {
    while (numGrandprize < 1)
    Saskatchewanbtn()
}

