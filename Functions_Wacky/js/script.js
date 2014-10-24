/**
 Expressions Wacky
 Aaron Peachey
 10/23/2014
 */


var peanutsOnHand = +prompt("Today we need to find out if the zoo has enough peanuts to get through the week. How many pounds of peanuts are on hand right now?");
var peanutBackUp = +prompt("How many pounds are in the peanut reserves?");
var daysLeft = +prompt("How many days until the next peanut shipment?")
var poundsElephantEats = 200 * daysLeft

function peanutCalculation(p1. p2. d){
    var survive = d / p1 + p2
    console.log(survive)
}

peanutCalculation(peanutsOnHand, peanutBackUp, daysLeft)