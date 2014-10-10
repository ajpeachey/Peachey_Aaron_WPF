/* Aaron Peachey
October 9th, 2014
Expressions Industry
 */

var week1 = prompt("We are going to find out how many leads per day we average! Please tell me how many leads you had in week one of this month.");
var week2 = prompt("How many leads in week 2?");
var week3 = prompt("Week 3?");
var week4 = prompt("and lastly week 4.");
var workDays = prompt("How many work days were in this month?");
var totalLeads = week1 + week2 + week3 + week4;
var average = totalLeads / workDays;
var result = "Over the last four weeks, you collected" + " " + totalLeads + " " + "leads. That is an average of" + " " + average + " " + "leads per day based on" + " " + workDays + " " + "working days.";

alert(result);