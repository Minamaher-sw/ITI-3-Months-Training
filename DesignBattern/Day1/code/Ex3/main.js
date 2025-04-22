class Toyduck {
    constructor(color,price)
    {
        this._color =color;
        this._price =price ;
    }
}
class Toycar
{
 constructor(color,price,name)
    {
        this._color =color;
        this._price =price ;
        this._name = name ;
    }
}
class ToyFactory {
    constructor(color ,price ,type,name="kia")
    {
        this._color =color;
        this._price =price ;
        this._name = name ;
        this.type = type ;
        if(this.type == "toyCar")
            {
                return new Toycar( this._color,this._price  ,this._name  )
            }
        else if(this.type == "toyduck")
                {
                    return new Toyduck( this._color,this._price)
                }
        else{
    
            }
    }
}
var Car1 =new ToyFactory("red",2333333,"toycar","kia");
console.log(Car1._name);
var Car2 =new ToyFactory("blue",2333333,"toyduck");
console.log(Car2._color);