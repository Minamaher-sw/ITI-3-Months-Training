const person = { 
    name: "Alice", 
    address: { street: "123 Main St",
                city: "Los Angeles", 
                country: "USA" }
             }
function printAdress(obj)
{
    let {name,address:{city,country}}=obj ;
    console.log(city);
}
printAdress(person)