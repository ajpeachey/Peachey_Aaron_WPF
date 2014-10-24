/**
 Functions Industry
 Aaron Peachey
 10/23/2014
 */


var baseFee = +prompt("What is the base fee for this site?");
var hoursWorked = +prompt("How many hours estimated for this project?")
var hourlyRate = 150


function siteFees(b, hw, hr){
var feeCalc = b + hw * hr
var total = "The total fee for this website will be $" + feeCalc + "."
    alert(total)
};

siteFees(baseFee,hoursWorked,hourlyRate)''