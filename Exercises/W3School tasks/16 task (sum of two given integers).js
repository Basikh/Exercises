// 16.
// Write a JavaScript program to compute the sum of the two given integers. If the two values are 
// same, then returns triple their sum

let firstNum = prompt("Insert the first number:");
let secondNum = prompt("Insert the second number:");
let x = Number(firstNum);
let y = Number(secondNum);
if (firstNum === secondNum){
    console.log(3*(x + y))
}
else {
    console.log(x + y)
}