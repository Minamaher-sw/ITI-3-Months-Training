
function getDate()
{
    let currentDate = new Date()
    currentDate = currentDate.toLocaleString() ;
    document.getElementById("demo2").innerHTML=currentDate ;
}