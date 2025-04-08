// c.	When the user focus in full name text, show blue border
//  for the input (use element.style.border=”solid 1px blue”), c.	

var check_valid ;
var check_valid_2 ;
let fullName = document.getElementById("fullName") ;
let span =  document.getElementById("invalidname") ;
let form =document.getElementById("form") ;

let password = document.getElementById("password") ;
let repeatPassword = document.getElementById("rPassword") ;
let span2 = document.getElementById("invalidPaaword");
fullName.onfocus =function ()
{
    fullName.style.border ="solid 3px blue"
}

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
    if(check_valid == 1 &&  check_valid_2 == 1)
    {
        form.submit() ;
    }
    else if(check_valid == 0 || check_valid_2 == 0)
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

// Bonus Repeat passsword

repeatPassword.onblur =function()
{
    if(password.value != repeatPassword.value)
    {
        span2.setAttribute("style" , "display:block; color:red ;")
        check_valid_2 = 0 ;
    }
    else if(password.value == repeatPassword.value)
    {
        span2.style.display="none" ;
        check_valid_2 = 1 ;
    }
}
password.onblur =function()
{
    if(password.value != repeatPassword.value)
    {
        span2.setAttribute("style" , "display:block; color:red ;")
        check_valid_2 = 0 ;
    }
    else if(password.value == repeatPassword.value)
    {
        span2.style.display="none" ;
        check_valid_2 = 1 ;
    }
}