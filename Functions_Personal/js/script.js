/**
 Functions Personal
 Aaron Peachey
 10/23/14
 */

var item = prompt("Today we are looking to buy a new car. Would you like to continue to see if it is possible?");
// prompt to start the process
if(item == "yes"){
    carcalc()// use of a function in an if statement
}else{
    alert("That's too bad, I guess our game is over.")
};// end the game, and won't continue onto the function calculations

function carcalc() { // basic function
    var carCost = +prompt("How much does the new car cost?")
    var bank = +prompt("How much money is in your bank account right now?");
    var cash = +prompt("How much cash do you have on hand?")
    var percent = carCost * .20
    if(bank + cash >= percent){
        alert("You have the necessary funds to buy your new car! ")
    }else{
        alert("I'm sorry, it looks like you have some more saving to do before you can buy the car.")
    } // if/else statement inside of the function to alert the proper math

};


// same program using a ternary

var item = prompt("Today we are looking to buy a new car. Would you like to continue to see if it is possible?");
// prompt to start the process
if(item == "yes"){
    carcalc()// use of a function in an if statement
}else{
    alert("That's too bad, I guess our game is over.")
};// end the game, and won't continue onto the function calculations

function carcalc() { // basic function
    var carCost = +prompt("How much does the new car cost?")
    var bank = +prompt("How much money is in your bank account right now?");
    var cash = +prompt("How much cash do you have on hand?")
    var percent = carCost * .20

  percent = (bank + cash >= percent) ? alert("You have the necessary funds to buy your new car! ") : alert("You have the necessary funds to buy your new car! ")

     // ternary statement inside of the function to alert the proper math

};
