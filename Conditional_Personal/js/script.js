/**
 Conditionals Personal
 Aaron Peachey
 10/16/2014
 */


var hoursSlept = prompt("How many hours of sleep did you get last week?")
var hoursWorked = prompt("How many hours did you work last week?")
var hourInWeek = 168
var hoursLeftOver = hourInWeek - (Number(hoursSlept) + Number(hoursWorked))
var hoursSleepNeeded = 56
var hoursPerDay = Number(hoursSlept) / 7

if(hoursSlept >= hoursSleepNeeded){
    alert("You are getting" + " " + hoursPerDay + " " + "hours per night of sleep. That amount will help keep you healthy and give you" + " " + hoursLeftOver + " " + "hours of free time each week!" )

    if(hoursSlept == ""){
        Prompt("Ooops! The program won't work if you don't give me an answer! Please enter the number of hours you slept last night.")
    }
}else{
    alert("You should really be getting more sleep! Right now you have" + " " + hoursLeftOver + " " + "hours of free time each week, you have time to spare.")
}
