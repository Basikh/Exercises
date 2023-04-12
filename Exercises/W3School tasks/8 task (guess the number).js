// #8
// Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then 
// prompted to input a guess number. If the user input matches with guess number, the program will 
// display a message "Good Work" otherwise display a message "Not matched". 

let number = Math.floor(Math.random()*10+1);
let count = 0;
let userGuess;
do{
    userGuess = prompt("Write a Number:");
    count++;
} while (number != userGuess);
console.log("You're win! It took you " + count + " tries");