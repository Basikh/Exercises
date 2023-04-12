// #13. 
// Write a JavaScript exercise to create a variable using a user-defined name.  
let varName = prompt("type name");
let value = prompt("type value");

this[varName] = value;
console.log(varName);
console.log(this[varName]);