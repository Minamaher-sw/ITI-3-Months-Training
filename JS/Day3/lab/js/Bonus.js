var newWin ;
function openNewWindo()
{
    setTimeout(
    function()
    {
        newWin = window.open("../Html/open_window.html" , "_self","width=120;height=120;");
    },3000)

}

function closeWindow()
{
    newWin.close() ;
}

var counter = 0 ;
function displayText()
{
    var string1="mina maher ms=osadef estafanous shenouda";
        var inter=setInterval(function()
        {
            document.getElementById("demo").innerHTML +=string1[counter];
            counter++ ;
            if(counter == string1.length)
            {
                clearInterval(inter) ;
            }
        },100)
}
