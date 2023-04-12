// #6
// Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.

isLeap (2020)
function isLeap (year){
    if (year % 4 === 0){
        console.log("It's a leap year!");
    }
    else {
        console.log("It's NOT a leap year");
    }
}