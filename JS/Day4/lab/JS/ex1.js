// c.	When the user focus in full name text, show blue border
//  for the input (use element.style.border=”solid 1px blue”), c.	

let fullName = document.getElementById("fullName") ;
let span =  document.getElementById("invalidname") ;
let form =document.getElementById("form") ;
fullName.onfocus =function ()
{
    fullName.style.border ="solid 3px blue"
}
var check_valid ;

fullName.onblur =function ()
{
    fullName.style.border =""
    check();
}

function check()
{
    let valuOf = fullName.value ;
    if(valuOf.length < 3)
    {
       span.setAttribute("style" , "display:block; color:red ;")
       fullName.setAttribute("style" , " background-color:gray ;")
        check_valid = 0 ;
    }
    else
    {
       span.style.display="none" ;
       fullName.setAttribute("style" , " background-color:white ;")
        check_valid = 1;
    }
}
form.onsubmit=function()
{
    console.log(check_valid);
    if(check_valid == 1)
    {
        form.submit() ;
    }
    else if(check_valid == 0)
    {
        event.preventDefault() ;
    }
}

function display()
{
    var querString = location.href ;
    console.log(querString) ;
    var ArrayName = querString.split("&")
    var userName = ArrayName[0].split("=")[1]
    if(userName.includes("+"))
    {
        userName = userName.split("+")
        var strUsrName = userName.join(" ");
        document.getElementById("demo").innerHTML = "thank you : " + strUsrName;
    }
    else
    {
        document.getElementById("demo").innerHTML = "thank you : " + userName;
    }

}
