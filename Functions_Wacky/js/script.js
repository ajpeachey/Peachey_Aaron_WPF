/**
 Expressions Wacky
 Aaron Peachey
 10/23/2014
 */


var peanutsOnHand = +prompt("Today we need to find out if the zoo has enough peanuts to get through the week. How many pounds of peanuts are on hand right now?");
var peanutBackUp = +prompt("How many pounds are in the peanut reserves?");
var daysLeft = +prompt("How many days until the next peanut shipment?");
var poundsElephantEats = 200 * daysLeft;

function peanutCalc(peanutsOnHand, peanutBackUp, daysLeft){ //function setup with 3 parameters
    var survive = peanutsOnHand + peanutBackUp / daysLeft
    return survive;
}

peanutCalc(peanutsOnHand, peanutBackUp, daysLeft); //calling the function


if(peanutCalc(peanutsOnHand, peanutBackUp, daysLeft) >= poundsElephantEats || peanutsOnHand >= poundsElephantEats || peanutBackUp >= poundsElephantEats){
    alert("Looks like you have enough peanuts for the elephants to survuve!")
}else{
    alert("Watch out! Those elephants are going to get hungry, and they have to eat something!")
};// if statement