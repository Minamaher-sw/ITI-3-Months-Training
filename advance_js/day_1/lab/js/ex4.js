function Person( name , age)
{
    this._personName = name ;
    this._personAge = age ;
}

var person1 = new Person("mina", 25);

console.log(person1._personName);