// #11
// Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
// [ Formula : c/5 = (f-32)/9 [c = temperature in Celsius; f = temperature in Fahrenheit]
// Expected Output :
// 60°C is 140 °F
// 45°F is 7.222222222222222°C
let temp;
document.getElementById("submitBtn").onclick = function(){ 
    temp = document.getElementById("tempreture").value;
if (document.getElementById("celBtn").checked) {
    let x = (temp - 32) / 9 * 5;
    document.getElementById("myLabel").innerHTML = temp + "F will be " + x + " in Celsius";
}
else if (document.getElementById("fahBtn").checked){
    let y = temp / 5 * 9 + 32;
    document.getElementById("myLabel").innerHTML = temp + "C will be " + y + " in Fahrenheit";}
}