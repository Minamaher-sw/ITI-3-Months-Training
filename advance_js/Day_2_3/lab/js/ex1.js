function Person(name , age)
{
    this._personName = name;
    this._personAge = age ;
}

Person.prototype.PrintPerson=function()
{
    console.log(`my name is ${this._personName} and my age is ${this._personAge}`)
}

function Student(name , age , faculty , totalMark =0 )
{
    Person.call(this,name , age) ;
    this._faculty = faculty ;
    this._totalMark = totalMark ;
}

Student.prototype.printStudent = function()
{
    console.log(`myy name is ${this._personName}`)
}


//ex 2