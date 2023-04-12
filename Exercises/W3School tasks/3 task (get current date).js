// #3
// Write a JavaScript program to get the current date.
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

let currentTime = new Date();
let dd = String(currentTime.getDate()).padStart(2, "0");
let mm = String(currentTime.getMonth()).padStart(2, "0");
let yyyy = String(currentTime.getFullYear());

console.log(dd + "/" + mm + "/" + yyyy);
