do
{
    var fullName =prompt("enter your full Name") ;
    var pattern = /^(?:[A-Za-z]{3,})(?:\s[A-Za-z]{3,})*$/
}while(!(pattern.test(fullName)))
var pattern_2 =/^[A-Za-z0-9.]+@[A-Za-z0-9.]+\.(com|net|edu|org)\.eg$/
do
{
    var email =prompt("enter your Email address") ;
}while(!(pattern_2.test(email)))