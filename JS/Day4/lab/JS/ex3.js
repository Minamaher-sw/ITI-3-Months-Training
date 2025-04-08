var img1 =document.images[0]
var img2 =document.images[1]
var img3 =document.images[2]
var img4 =document.images[3]

var opacity_value_1 = 1 ;
var opacity_value_2 = 1 ;
let inter1 ;
let inter2 ;

function changeOpacity(imag)
{
    clearInterval(inter1)
     opacity_value_1 = 1;
    inter1 = setInterval(
        function()
        {
            imag.style.opacity=opacity_value_1 ;
            opacity_value_1 -= .1 ;
        } , 300)
}
function returnOpacity(imgs)
{
    clearInterval(inter2)
    opacity_value_2 = .3 ;
    inter2 = setInterval(
        function()
        {
            imgs.style.opacity=opacity_value_2 ;
            opacity_value_2 += .1 ;
            if(opacity_value_2 == 1)
            {
                opacity_value_1 = 1;
            }
        } , 200)
}
img1.onmouseover =function()
{  
    changeOpacity(img1) ;
}
img2.onmouseover =function()
{

    changeOpacity(img2) ;
}
img3.onmouseover =function()
{
    changeOpacity(img3) ;
}
img4.onmouseover =function()
{
    changeOpacity(img4) ;
    
}
img1.onmouseout =function()
{
    returnOpacity(img1) ;
}
img2.onmouseout =function()
{

    returnOpacity(img2) ;

}
img3.onmouseout =function()
{
    returnOpacity(img3) ;

}
img4.onmouseout =function()
{
    returnOpacity(img4) ;

}

// bonus
