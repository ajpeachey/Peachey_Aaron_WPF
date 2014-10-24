/**
 Expressions Wacky
 Aaron Peachey
 10/23/2014
 */


var peanutsOnHand = +prompt("Today we need to find out if the zoo has enough peanuts to get through the week. How many pounds of peanuts are on hand right now?");
var peanutBackUp = +prompt("How many pounds are in the peanut reserves?");
var daysLeft = +prompt("How many days until the next peanut shipment?")
var poundsElephantEats = 200 * daysLeft








if(peanutsOnHand >= poundsElephantEats || peanutBackUp >= poundsElephantEats){
    alert("You have enough peanuts to survive!")
}else{
    alert("Watch out! Those elephants are going to get hungry and they need to eat something!")
}