// #1
// Write a JavaScript program to display the current day and time in the following format. 
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let time = new Date();
let getTime = time.getHours();
if (getTime >= 12 && getTime <= 24)
{
console.log("Current time is: " + time.getHours() + " PM : " + time.getMinutes() + " : " + time.getSeconds());
}
else if(getTime < 12)
{
  console.log("Current time is: " + time.getHours() + " AM : " + time.getMinutes() + " : " + time.getSeconds());
}
console.log("Today is : " + weekdays[time.getDay()]);