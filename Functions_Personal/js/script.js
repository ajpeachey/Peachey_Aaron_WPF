/**
 Functions Personal
 Aaron Peachey
 10/23/14
 */

var item = prompt("Today we are looking to buy a new car. Would you like to continue to see if it is possible?")

if(item == "yes"){
    carcalc()
}else{
    alert("That's too bad, I guess our game is over.")
}

function carcalc() {
    var carCost = +prompt("How much does the new car cost?")
    var bank = +prompt("How much money is in your bank account right now?");
    var cash = +prompt("How much cash do you have on hand?")
    var percent = carCost * .20
console.log(percent)
}
