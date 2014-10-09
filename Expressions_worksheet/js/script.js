/*
Aaron Peachey
October 9th, 2014
Expression Worksheet
 */

var width = 10; //The width of the rectangle
var height = 6; // The height of the rectangle
var result = width * height; //The result of multiplying width times height

console.log(result); // Printing the answer to width times height

// This was a test to see if I had the general concept

//Dog Years

var dogsAgeHuman = 4;
var dogsAgeDog = dogsAgeHuman * 7;

var result = "Sparky is" + " " + dogsAgeHuman + " " + "human years old which is" + " " + dogsAgeDog + " " + "in dog years.";

console.log(result);

//Slice of Pie part 1

var pizzaSlices = 8;
var numPeople = 47;
var pizzaOrder = 15;
var calculation = pizzaOrder * pizzaSlices / numPeople;
var result = "Each person ate" + " " + calculation + " " + "slices of pizza at the party";

console.log(result);

// Slice of Pie part II
var totalSlices = pizzaOrder + pizzaSlices;
var sparkysPie = "Sparky got" + " " + totalSlices % numPeople + " " + "slices of pizza.";

    console.log(sparkysPie);

//Average Shopping Bill

var groceryBills = [128.56, 62.52, 105.26, 79.65, 89.25];
var groceryTotal = groceryBills[0] + groceryBills[1] + groceryBills[2] + groceryBills[3] + groceryBills[4];
var groceryAve = groceryTotal / 5

var result = "You have spent a total of $" + groceryTotal + " " + "on groceries over 5 weeks." + " " + "That is an average of $" + groceryAve + " " + "per week.";

console.log(result);