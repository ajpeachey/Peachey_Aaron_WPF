/* Aaron Peachey
October 9th, 2014
Expressions Personal
 */


var totalTuition = prompt("Today we are going to determine how much you will owe in student loans. Please enter your total tuition here.");
var grants = prompt("What is the total amount you will receive in grants?");
var otherContributions = prompt("Will there be any money other than grants and loans to pay for school? What is that amount? Enter 0 if zero.");

var result = totalTuition - grants - otherContributions

var toPrint = "Your total student loan debt will be" + " " + result

alert(toPrint)