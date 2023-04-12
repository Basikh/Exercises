// #10. 
// Write a JavaScript program to calculate multiplication and division of two numbers (input from user).
document.getElementById("multiplyBtn").onclick = function(x){
    x = document.getElementById("firstInput").value * document.getElementById("secondInput").value;
    document.getElementById("result").innerHTML = "The result is: " + x;
}
document.getElementById("divideBtn").onclick = function (y){
    y = document.getElementById("firstInput").value / document.getElementById("secondInput").value;
    document.getElementById("result").innerHTML = "The result is: " + y;
}