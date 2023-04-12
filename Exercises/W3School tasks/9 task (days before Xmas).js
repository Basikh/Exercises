// #9. 
// Write a JavaScript program to calculate days left until next Christmas.

// const wholeYear = 365;
// let currentDate = new Date();
// let x = currentDate.getDate() + "/" + currentDate.getMonth() + "/" + currentDate.getFullYear();
// for(i=0;i<=365;i++){

// }

const dayOfYear = date =>
  Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
let currentDate = dayOfYear(new Date());

const xmas = date =>
  Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
let xmasDay = xmas(new Date("December 25"));
console.log(xmasDay);

if(currentDate <= xmasDay){
    console.log(xmasDay - currentDate + " days left till Christmas!");
}
else{
    console.log((currentDate - xmasDay) + xmasDay + " days left till Christmas!");
}