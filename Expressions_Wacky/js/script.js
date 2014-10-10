/* Aaron Peachey
October 9th, 2014
Expressions Wacky
 */

var items = prompt("How many items did you receive from Amazon.com?");
var largeItems = prompt("How many large boxes?");
var mediumItems = prompt("How many medium boxes?");
var smallItems = prompt("How many small boxes?");

var smBoxWeight = 2;
var medBoxWeight = 4;
var larBoxWeight = 6;


var totalSmWeight = smallItems * smBoxWeight;
var totalMedWeight = mediumItems * medBoxWeight;
var totalLarWeight = largeItems * larBoxWeight;

var totalCardboardWeight = totalSmWeight + totalMedWeight + totalLarWeight;

var result = "Oh boy, the recycle man is going to love you! You accumulated" + " " + totalCardboardWeight + "lbs of cardboard.";

alert(result);