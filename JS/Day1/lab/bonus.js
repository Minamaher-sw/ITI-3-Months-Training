/*
On contact page prompt user to 
enter his name, make sure that name is string, and let the user enter 
his birth year and make sure that it is a number, and it is less than 2010,
 and then calculate his age. For each prompt if user input valid show him next prompt, 
if not valid show him the same prompt again until user enters it correctly (use loops). 
And after validating user input, write all user input on the page in that format:
*/
 
do 
{
    var userName= prompt("enter your name ") ;
}while((isFinite(userName)));
do 
{
    var userBirthDate= prompt("enter your birth date ") ;
}while(Number(userBirthDate) && (Number(userBirthDate) < 2010));

var html = 
`
<u> <b> Name </b></u> ${userName} <br>
<u> <b> Birth year </b></u> ${userBirthDate} <br>
<u> <b> age </b></u> ${2025 - userBirthDate } <br>
`
document.getElementById("demo2").innerHTML= html ;


function writeWelcome()
{
    for(var i=1 ; i<7 ; i++)
    {
        document.write(`<h${i}>welcome to my page</h${i}>`)
    }
}
writeWelcome()


var arr1=[2,3,4,5]