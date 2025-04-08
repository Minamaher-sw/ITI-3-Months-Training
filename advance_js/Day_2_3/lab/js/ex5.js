var myEvent = new Event("randomsize");
document.getElementById("demo").addEventListener("randomsize",function()
{
    let font = Math.floor(Math.random()*32);
    this.style.fontSize =font+"px";
}
) ;

setInterval(function(){

    document.getElementById("demo").dispatchEvent(myEvent);
},1000)


//ex 2
let Person ={
    name : "Mina",
    age :23 ,
    gender : "Male"
}

Object.seal(Person);
Object.freeze(Person);

var Student = Object.create(Person);
Student.fullName = "sherif shokery" ;

//assign 

var resObj =Object.assign({},Person , Student) ;
console.log(resObj);


//ex 4

let Car = {

}

Object.defineProperty(Car,"type",{
    value : "fiat",
})
Object.defineProperty(Car,"model",{
    value : 2023,
    writable:false ,
})
Object.defineProperty(Car,"price",{
    value : 3000000,
})

console.log(Car) ;
//define properties
Object.defineProperties(Car ,
    {
        type :{
            value : "fiat",
        },
        model :{
            value : 2023,
            writable:false 
        },
        price :{
            value : 3000000
        }
    }
)
console.log(Car) ;
