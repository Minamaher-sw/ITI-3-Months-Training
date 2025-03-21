 
function checkStdFaculty(studentFacultyName)
{
    switch(studentFacultyName)
   {
        case "FCI" : alert("You\'re eligible to Programing tracks")
        break ;
        case "Engineering" : alert("Yo\'re eligible to Network and Embedded tracks")
        break ;
        case "Commerce" : alert("You're eligible to ERP and Social media tracks")
        break ;
        default :
         alert("You\'re eligible to SW fundamentals track")
         break ;
   }
}

var facultName = prompt("Enter Faculty Name");
checkStdFaculty(facultName);