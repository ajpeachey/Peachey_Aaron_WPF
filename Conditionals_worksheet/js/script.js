/**
 Conditionals Worksheet
 Aaron Peachey
 10/16/2014
 */

//Last Chance For Gas!

var mpg = 14
var percentTank = 20
var tankCap = 25
var gallonsLeft = tankCap / percentTank
var distance = gallonsLeft * mpg


if(distance > 200){
    console.log("Yes, you can make it without stopping for gas!")
}else console.log("You only have" " " gallonsLeft " " "gallons of gas in your tank, better get gas now while you can!")
