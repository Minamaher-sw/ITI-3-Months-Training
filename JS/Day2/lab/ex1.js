var arr = [
            "js1" , "js2",
            "js3" , "js4",
            "js5" , "js6",
            "js7" , "js8",
            "js9" , "js10"
        ]
let index= Math.random()*arr.length
index = Math.round(index);
document.getElementById("demo1").innerHTML=arr[index] ;
