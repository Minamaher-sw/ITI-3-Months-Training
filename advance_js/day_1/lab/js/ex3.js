var num1 = parseInt(prompt("enter number 1"));
var num2 = parseInt(prompt("enter number 2"));
var operator =prompt("enter operator");

function Dynamic()
{
    return new Function("num1","num2" ,"operator",`return num1${operator}num2`)
}
document.getElementById("demo1").innerHTML = "result is : "+Dynamic()(num1 , num2 , operator);