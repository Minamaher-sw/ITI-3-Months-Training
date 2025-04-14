import { Person } from "../ex2/ex2.js";

class Student extends Person {
    constructor(University ,faculty , name ,age ,avgFinalGrades)
    {
        super(name,age);
        this._University = University;
        this._faculty  =faculty ;
        this._avgFinalGrades =avgFinalGrades;
    }
    showStudentData(){
        console.log(`my name is ${this._name} and my age is ${this._age} i study at ${this,this._University} faculty of ${this._faculty} i get about ${this._avgFinalGrades} grade this year` )
    }
}

//mixin
let studenObj={
    printName :function(){console.log(this._name)},
    printAge :function(){console.log(this._age)},
    // printAge1 :()=>{console.log(this)}

}
Object.assign(Student.prototype , studenObj);

let std1 = new Student("sohag","Enginnering","Pepo",13,2300)
std1.showStudentData();
std1.printName();
// std1.printAge1();

