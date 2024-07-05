//variable with a Boolean data type
var x = true;
//printing the data type of the variable x 
document.write(typeof x); 
document.write("<br>");

//an expression combining a string and a number 
document.write("20" + 20);
document.write("<br>");

//utilizing the == operator
document.write(5 == 5); 
document.write("<br>");

//utilizing the === operator
x = 1;
y = 1;
document.write(x === y); 
document.write("<br>");

//utilize the > and && operator
document.write(10 > 5 && 10 > 6);
document.write("<br>");

//utilize the ! operator
function not_function()
{
    document.getElementById("NOT").innerHTML = !(2>4);
}