export class Person {
    constructor(name ,age)
    {
        this._name = name ;
        this._age =age ;
    }
    printPersonData(){
        console.log( `Hi ${this._name} and my age ${this._age}`);
    }
}

let pers1 =new Person("mina",13);
pers1.printPersonData();