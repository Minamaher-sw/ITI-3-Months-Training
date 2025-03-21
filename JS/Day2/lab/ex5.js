var arrObject =
[
    {
        studentName : "Mina Maher" ,
        studentDegree : 95 
    },
    {
        studentName : "pepo Maher" ,
        studentDegree : 50 
    },
    {
        studentName : "Roma Maher" ,
        studentDegree : 40
    },
    {
        studentName : "marly Maher" ,
        studentDegree : 60 
    },
    {
        studentName : "karlo Maher" ,
        studentDegree : 100 
    },
]

let val =arrObject.find(
    function(obj)
    {
        return  ((obj.studentDegree > 90) && (obj.studentDegree < 100) )
    }
)
console.log(val.studentName)

let filterArray =arrObject.filter(
    function(obj)
    {
        return (obj.studentDegree < 60 )
    }
)
console.log(filterArray.length)
for(var i=0 ; i<filterArray.length ; i++)
{
   console.log( filterArray[i].studentName )
}

let newLentgh = arrObject.push({studentName :"joe maher" , studentDegree:30 })
for(let item in arrObject)
{
    console.log(arrObject[item])
}

// pop
console.log("after using pop")
arrObject.pop() ;

for(let item of arrObject)
{
    console.log(item)
}

//after using sort 
arrObject.sort()
console.log(arrObject)