// #5
// Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing 
// one letter from the end of the string and attaching it to the front.

let output = "w3resource";
let result = output.split("").reverse().join("");
console.log(result);
