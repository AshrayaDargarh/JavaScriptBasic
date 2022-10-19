var x, y;
function add(x, y) {
  //Loacal Variable for this function
  var1 = 20;
  z = x + y;
  // return z;
}
// fianl=add("Welcome ","to VIT");

add("Welcome ", "to VIT");

// document.write("<h1>"+fianl+"</h1>");

document.write("<h1>" + z + "</h1>");

document.write("<h1>" + var1 + "</h1>");

// Strings
var str = 'Hello this is "Welcome" greet ';
document.write(str, "<br>");

//String methods
var newStr = "Welcome to this page of string method";
var a = newStr.length;
document.write("Length=", a, "<br>");
var a = newStr.toUpperCase();
document.write("UpperCase=", a, "<br>");
var a = newStr.toLowerCase();
document.write("LowerCase=", a, "<br>");
var a = newStr.includes("el");
document.write("includes=", a, "<br>"); // True or false
var a = newStr.startsWith("Wel");
document.write("startsWith=", a, "<br>");
var a = newStr.search("to");
document.write("search=", a, "<br>");
var a = newStr.indexOf("to");
document.write("indexOf=", a, "<br>");

var str = "welcome to replace method to to  to";
var b = str.replace("to", "From");
document.write(b, "<br>");

var b = str.replace(/to/g, "From");
document.write(b, "<br>");

var str1 = "welcome to concat";
var str2 = " method to concatinate two stings";
var b = str1.concat(str2);
document.write(b, "<br>");

var str2 = "Split method to split";
var b = str2.split(" ");
document.write(b, "<br>");

var str2 = "Repeat method to repeat";
var b = str2.repeat(2);
document.write("<p>", b, "</p>");
// Slicing
var str2 = "Slice method for slicing";
var b = str2.slice(0, 4);
document.write("<p>", b, "</p>");
// Substring
//A big difference with substring() is that if the 1st argument is greater than the 2nd argument, 
//substring() will swap them. slice() returns an empty string if the 1st argument is greater than the 2nd argument.
var str2 = "Substring method for substing the string";
var b = str2.substring(0, 4);
document.write("<p>", b, "</p>");

var str2 = "Substring method for substing the string";
var b = str2.substr(4,9);
document.write("<p>", b, "</p>");