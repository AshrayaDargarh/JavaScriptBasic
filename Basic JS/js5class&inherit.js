class Student {
  constructor(name, age, add) {
    this.name = name;
    this.age = age;
    this.add = add;
  }
  getInfo() {
    return (
      "My name is " +
      this.name +
      " and I am " +
      this.age +
      " years old " +
      " I live in " +
      this.add
    );
  }
  static add(a,b)
  {
      return a+b;
  }
}
class Student1 extends Student{
    constructor(name,age,add,lang,study){
        super(name,age,add);// Only those var which we want to inherit from parent class
        this.lang=lang;
        this.study=study;
    }
}

/*var s1 = new Student("Ashu", "20", "Sik");
document.write("<p>" + s1.name + "</p>");
document.write("<p>" + s1.age + "</p>");
document.write("<p>" + s1.add + "</p>");
document.write("<p>" + s1.getInfo() + "</p>");*/
//We don't need to create the object to access the static methods
// document.write("<p>" + Student.add(10,30) + "</p>");

var s2=new Student1("Devu","23","Sik","Hindi","MCA");
document.write("<p>" + s2.name + "</p>");
document.write("<p>" + s2.age + "</p>");
document.write("<p>" + s2.add + "</p>");
document.write("<p>" + s2.lang + "</p>");
document.write("<p>" + s2.study + "</p>");
document.write("<p>" + s2.getInfo() + "</p>");