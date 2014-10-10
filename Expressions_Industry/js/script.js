/* Aaron Peachey
October 9th, 2014
Expressions Industry
 */

var week1 = +prompt("We are going to find out how many leads per day we average! Please tell me how many leads you had in week one of this month."); //first prompt for addition formula
var week2 = +prompt("How many leads in week 2?"); //second prompt for addition formula
var week3 = +prompt("Week 3?"); //third prompt for addition formula
var week4 = +prompt("and lastly week 4."); //forth prompt for addition formula
var workDays = prompt("How many work days were in this month?"); //prompt for days worked in a month
var totalLeads = week1 + week2 + week3 + week4; //formula adding total leads over 4 weeks
var average = totalLeads / workDays; //determining average per day
var result = "Over the last four weeks, you collected" + " " + totalLeads + " " + "leads. That is an average of" + " " + average + " " + "leads per day based on" + " " + workDays + " " + "working days.";
//print result for final alert
alert(result);