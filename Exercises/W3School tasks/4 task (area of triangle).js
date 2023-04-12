// #4
// Write a JS program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7

let a = 5;
let b = 6;
let c = 7;
let s = (a + b + c)/2; //semiPerimeter
let area = Math.sqrt(s*(s-a)*(s-b)*(s-c));
console.log(Math.floor(area));
