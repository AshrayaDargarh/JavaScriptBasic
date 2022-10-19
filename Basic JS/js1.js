// let variable can't allow you to redeclare the same variable and it's limited within the scope(For loops)

// var variable allow you to redeclare the same variable and it's not limited within the scope

// conts the values which we don't want to update once they are delcared and It will not allow you to redeclare same var again

document.write("Top");
var a = "A";
document.write(a);

var a = "B";
document.write(a);
document.write("Bottom");

// let a="Hello";
// let a="B";
//Error:-Uncaught SyntaxError: Identifier 'a' has already been declared

// Data Types: Premitive and non-premitive
//Premitive data types are stored in stacks(number,string,boolean)
//Non-Premitive data types are stored in heaps(Arrays, objects)

//Loosely typed We don't need to define the datatype of the variable 
var p;
//If the value is not assigned to a variable then that variable is known as undefined datatype
var b=null;
// A null value always treated as object in JS;
document.write(typeof(b))


//Type Conversion
var str="c";
var num=23;
var bool=true;

console.log(typeof(str));
console.log(typeof(num));
console.log(typeof(bool));

ntos=String(num)+"Hello Num";
booltos=String(bool);
console.log(typeof(ntos));
console.log(typeof(booltos));

console.log(typeof(parseInt(str)));
console.log(parseInt(str));

var num=parseFloat('45.23');
console.log("Float=",num.toFixed(1))

// Switch Case:

var bool=true;
document.write("<h1>"+"Switch Case"+"</h1>")
switch(bool)
{
    case false:
        document.write("<h1>"+"False"+"</h1>");
        // document.getElementById('para').innerHTML= "False";
        break;
    case true:
        document.write("<h1>"+"True"+"</h1>")

        // document.getElementById('para').innerHTML= "True";
        break;
    default:
        // document.getElementById('para').innerHTML= "Default";
        document.write("<h1>"+"Default"+"</h1>")
        

}
document.write("<h1>"+"For Loop"+"</h1>")
n=prompt("Enter the value for table")
for(var i=1;i<11;i++)
{
    document.write("<p><b>"+n*i+"</b></p>")
}