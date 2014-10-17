/**
 Conditionals Wacky
 Aaron Peachey
 10/16/2014
 */

var hasNuts = prompt("Do you like nuts in your candy bar?");

(hasNuts == "yes") ? alert("Sometimes you feel like a nut!") : alert("Sometimes you don't!");
var size = prompt("Do prefer regular or king size?");

(size == "king" || "king size") ? alert("That's a big candy bar!") : alert("Sometimes regular is just right!");
(hasNuts == "yes" && size == "King Size" || "King") ? alert("We recommend a King Size Almond Joy!") : alert("We think a Regular Size Mounds is your style");
