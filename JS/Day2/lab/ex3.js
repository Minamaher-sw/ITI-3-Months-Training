do
{
    var userEmail =prompt("Enter your Email")
}while((userEmail.charAt(0) =="@") || (userEmail.charAt(userEmail.length -1) == "@") || !(userEmail.includes("@")))
