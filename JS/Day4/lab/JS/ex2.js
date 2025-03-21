var array =["../gallery/ga1.jfif" , "../gallery/ga2.jfif" ,
            "../gallery/ga3.jfif" , "../gallery/ga4.jfif"
]

let but1Satart = document.getElementById("bt1") 
let bt2Stop = document.getElementById("bt2") 
let bt2Next = document.getElementById("bt3") 
let bt3Prev = document.getElementById("bt4")

let imag=  document.getElementById("ga1")
var counter = 0
let inter ;
but1Satart.onclick=function()
{
        inter =setInterval(
        function()
        {
            imag.src=array[counter] ;
            counter++ ;
            if(counter==4)
            {
                counter = 0;
            }
        },500
    )
}
bt2Stop.onclick = function () {
    
    clearInterval(inter) ;
}
bt2Next.onclick =function()
{
    counter++ ;
    imag.src=array[counter] ;
    if(counter == 3)
    {
        counter = 0
    }
}
bt3Prev.onclick =function()
{

    if(counter == 0)
    {
        counter = 4;
    }
    counter-- ;
    imag.src=array[counter] ;
   
}
imag.onmouseover =function()
{
        inter =setInterval(
        function()
        {
            imag.src=array[counter] ;
            counter++ ;
            if(counter==4)
            {
                counter = 0;
            }
        },500
    )
}