// problema cu cuptor

const EXPECTED_MINUTES_IN_OVEN = 40

function remainingMinutesInOven(actualMinutesInOven) {
   console.log(EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven) 
}

remainingMinutesInOven()

function preparationTimeInMinutes(numberOfLayers) {
    console.log( 2 * numberOfLayers )
}

function totalTimeInMinutes(numberOfLayers,actualMinutesInOven) {
    console.log( 2 * numberOfLayers + actualMinutesInOven )
}

// problema cu permis de conducere

function needsLicense(kind) {
    if ( kind==='car' || kind==='truck') {
        console.log(true)
    } else {
        console.log(false)
    }
}

function chooseVehicle(option1, option2) {
    if (option1<option2) {
        console.log(`${option1} is clearly the better choice`)
    } else {
        console.log(`${option2} is clearly the better choice`)
    }
}

function calculateResellPrice(originalPrice, age) {
    if ( age < 3) {
        console.log(originalPrice * 0.80)
    } else if (age <= 10) {
        console.log(originalPrice * 0.70)
    } else  {
        console.log(originalPrice * 0.50)
    }
}

// infinitate sau o bucla nu folosim asa ceva niciodata
function infinitate() {
    let number = 10
    let x = 2

    while (x < number) {
        console.log(x)
    }
}

function getRandomnumber(number) {
    var randomNumber = Math.random ();
    console.log(number)
}