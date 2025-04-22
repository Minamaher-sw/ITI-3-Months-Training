class CompanyCEO{
    constructor(name ,age ,address)
    {
        if(!CompanyCEO.instant)
        {
            this._name = name ;
            this._age =age ;
            this._address =address;
            CompanyCEO.instant =this ;
        }
        else
        {
            return CompanyCEO.instant;
        }
    }
}

let CEO1 =new CompanyCEO("Mina",44 ,"sohag saqulta");
console.log(CEO1);