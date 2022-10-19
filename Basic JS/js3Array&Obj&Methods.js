document.write("<h1>Array</h1>");
var car=["a","b","c"];
for(var i=0;i<car.length;i++)
{
    document.write("<p>"+car[i]+"</p>");
}
document.write("<p>"+"Second way of creating the array"+"</p>");

var car=new Array("a","b","c");
car.push("d");
car.pop();
car.push("e");
car.push("f");
car.push(25);
for(var i=0;i<car.length;i++)
{
    document.write("<p>"+car[i]+"</p>");
}

// Objects  2 ways

document.write("<h1>Objects</h1>");
var carobj={
    car_name:"BMW",
    car_number:184200041,
    car_price:"1Cr",
    allAbout:function(){
        document.write("One of the best car currently you can get in the market");
    }
}
document.write("<p>"+carobj.car_name,carobj.car_number,carobj.car_price+"</p>");
carobj.allAbout();
// Add a property to an object from outside
carobj.ownername="Ashraya";
document.write("<p>"+carobj.ownername+"</p>");

// Delete the property of object
delete carobj.ownername;
document.write("<p>"+carobj.ownername+"</p>");
// Updating the value and changing the datatype
carobj.car_number="21MCA1068";
document.write("<p>"+carobj.car_number+"</p>");
document.write("<p>"+typeof(carobj.car_number)+"</p>");

//2nd way
function cars(name,model,price)
{
    this.name=name;
    this.model=model;
    this.price=price;
    this.allAbout=function(){
        document.write("One of the best car currently you can get in the market");
    }
}

c1= new cars("Audi","Q7","56Lkhs");
document.write("<p>"+c1.name+"</p>");
document.write("<p>"+c1.model+"</p>");
document.write("<p>"+c1.price+"</p>");

// Math Object
document.write("<h1> Math Object</h1>");
var a=Math.sqrt(49);
document.write("<p>"+a+"</p>");

document.write("<p>"+Math.max(12,123,121,1000,11)+"<p/>");
document.write("<p>"+Math.min(12,123,121,1000,11)+"<p/>");

document.write("<p>"+Math.pow(2,3)+"<p/>");

var react1={
    length:5,
    width:10,
    getArea:function(){
        return this.length * this.width; // this keyword refers to the object it belongs to
    },
    getParameter:function()
    {
        return 2*this.length + 2*this.width;
    }
}
var area=react1.getArea();
var para=react1.getParameter();
document.write("<h1>Area</h1>");
document.write("<p>"+area+"<p/>");
document.write("<h1>Paramater</h1>");
document.write("<p>"+area+"<p/>");
