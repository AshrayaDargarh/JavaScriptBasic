// setInterval(function time(){
//     document.write("<h1>Timer fun</h1>");
// },1000)

// 4 Ways of creating date Object
// Year,month,day,hour,minute,sec,ms
//ways
var date=new Date();
document.write("<h4>"+date+"</h4>");

var date=new Date(2002,0,23,2)
document.write("<h4>"+date+"</h4>");

var date=new Date(2002)//Consider as mili sec
document.write("<h4>"+date+"</h4>");

var date=new Date("Jan 23 2002 2:30")
document.write("<h4>"+date+"</h4>");

function clock()
{
    var cd= new Date();
    var hours=cd.getHours();
    var minute=cd.getMinutes();
    var sec=cd.getUTCSeconds();
    document.write(hours,":",minute,":",sec,"<br>");
}
clock();

// Constructor
var obj=new Object(); // Empty object
//Object constructor Method

//Prototypes
var pr={
    name:"ashu",
    age:20,
    address:"Sikandra rao",
}
document.write(pr);

function xyz(name,age,add)
{
    this.name=name;
    this.age=age;
    this.add=add;
}

xyz.prototype.getName=function(){
    return this.name
}
xyz.prototype.grades="A";
var x1=new xyz("Ashu",20,"Mathura");

console.log(pr)
// pr.prototype.getName=function()
// {
//     return pr.address;
// }
