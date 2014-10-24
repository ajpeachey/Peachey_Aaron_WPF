/**
 Functions Industry
 Aaron Peachey
 10/23/2014
 */


var baseFee = +prompt("What is the base fee for this site?"); //Number collected for base fee of website
var hoursWorked = +prompt("How many hours estimated for this project?") //number of hours developer will put in
var hourlyRate = 150 //fixed hourly rate of the developer


function siteFees(b, hw, hr){ //basic function for reusing in the future
var feeCalc = b + hw * hr
var total = "The total fee for this website will be $" + feeCalc + "."
    alert(total)
};

siteFees(baseFee,hoursWorked,hourlyRate) //calling the function to present the result

siteFees(baseFee,hoursWorked,hourlyRate)