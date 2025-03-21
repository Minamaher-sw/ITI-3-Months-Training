//temp

function checkTemp(temperatue)
{
    let result =(temperatue >= 30)? "HOT" : "Cold"
    return result ;
}
var temp = Number(prompt("Enter temperature ")) ;

console.log(checkTemp(temp)) ;