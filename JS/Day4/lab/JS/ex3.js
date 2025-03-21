var img1 =document.images[0]
var img2 =document.images[1]
var img3 =document.images[2]
var img4 =document.images[3]

var opacity_value_1 = 1 ;
var opacity_value_2 = 1 ;
var opacity_value_3 = 1 ;
var opacity_value_4 = 1 ;
let inter1 ;
let inter2 ;
let inter3 ;
let inter4 ;


img1.onmouseover =function()
{  
    clearInterval(inter1)
     opacity_value_1 = 1;
    inter1 = setInterval(
        function()
        {
            img1.style.opacity=opacity_value_1 ;
            opacity_value_1 -= .1 ;
        } , 300)
}
img2.onmouseover =function()
{

    inter2 = setInterval(
        function()
        {
            img2.style.opacity=opacity_value_2 ;
            opacity_value_2 -= .1 ;
        } , 300)
}
img3.onmouseover =function()
{
    inter3 = setInterval(
        function()
        {
            img3.style.opacity=opacity_value_3;
            opacity_value_3 -= .1 ;
            if(opacity_value_3 == 0)
            {
                opacity_value_3 = 1 ;
            }
        } , 300)
}
img4.onmouseover =function()
{
    inter4 = setInterval(
        function()
        {
            img4.style.opacity=opacity_value_4 ;
            opacity_value_4 -= .1 ;
            if(opacity_value_4 == 0)
            {
                opacity_value_4 = 1 ;
            }
        } , 300)
}
img1.onmouseout =function()
{
    clearInterval(inter1)
    opacity_value_1 = .3 ;
    inter1 = setInterval(
        function()
        {
            img1.style.opacity=opacity_value_1 ;
            opacity_value_1 += .1 ;
            if(opacity_value_1 == 1)
            {
                opacity_value_1 = 1;
            }
        } , 200)
}
img2.onmouseout =function()
{

    rerurnOpacity(img2)
}
img3.onmouseout =function()
{
    rerurnOpacity(img3)
}
img4.onmouseout =function()
{
    rerurnOpacity(img4)
}