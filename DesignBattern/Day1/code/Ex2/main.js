class Car{
    constructor(type)
    {
        this.type =type;
    }
}
class FactoryCar{

  creatFixTypeCar(type)
  {
        return new Car(type);
  }
}

var carFixed =new FactoryCar()
var car1  =carFixed.creatFixTypeCar("Kia");
console.log(car1.type);
var car2 =carFixed.creatFixTypeCar("tyota")
console.log(car2.type);
