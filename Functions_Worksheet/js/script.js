/**
 Functions Worksheet
 Aaron Peachey
 10/23/14
 */


//Stung

var bodyWeight = 150 // fixed variable for weight of person
var stingPound = 8.666666667 // number of stings per pound needed to kill someone

function beeSting(bodyWeight, stingPound){ //Basic function setup
    var toKill = bodyWeight * stingPound
    console.log("It takes" + " " + toKill + " " + " bee stings to kill this animal.")
}

beeSting(bodyWeight, stingPound)