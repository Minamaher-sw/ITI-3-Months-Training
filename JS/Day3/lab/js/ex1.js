
function display()
{
    // var querString = location.href ;
    // console.log(querString) ;
    // var ArrayName = querString.split("&")
    // var userName = ArrayName[0].split("=")[1]
    // if(userName.includes("+"))
    // {
    //     userName = userName.split("+")
    //     var strUsrName = userName.join(" ");
    //     document.getElementById("demo").innerHTML = "welcome : " + strUsrName;
    // }
    // else
    // {
    //     document.getElementById("demo").innerHTML = "welcome : " + userName;
    // }
    var params = new URLSearchParams(location.search)
    console.log(params.get("userName"));
    
}