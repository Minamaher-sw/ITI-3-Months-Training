var image_array =[] ;
var counter_array = [0 ,0 , 0 , 0, 0];
for(var i=0 ; i<5 ; i++)
{
    image_array[i] =document.images[i] ;
}

function imageOnclick(imageIndex ,counterIndex)
{
    if(counter_array[counterIndex] == 0)
    {
        image_array[imageIndex].src="../gallery/star_on.png"
        counter_array[counterIndex] =1;
    }
    else 
    {
        image_array[imageIndex].src="../gallery/star_off.png"
        counter_array[counterIndex]= 0 ;
    }
}
image_array[0].onclick =function()
{
    imageOnclick(0,0) ;
}
image_array[0].onmousemove = function()
{
    image_array[0].src="../gallery/star_on.png"
}
image_array[0].onmouseout = function()
{
    if(counter_array[0] == 1)
        image_array[0].src="../gallery/star_on.png"
    else
        image_array[0].src="../gallery/star_off.png" 
}
// image 2
image_array[1].onclick =function()
{
    imageOnclick(1,1) ;
}
image_array[1].onmousemove = function()
{
    image_array[1].src="../gallery/star_on.png"
}
image_array[1].onmouseout = function()
{
    if(counter_array[1] == 1)
        image_array[1].src="../gallery/star_on.png"
    else
        image_array[1].src="../gallery/star_off.png" 
}

//image 3

image_array[2].onclick =function()
{
    imageOnclick(2,2) ;
}
image_array[2].onmousemove = function()
{
    image_array[2].src="../gallery/star_on.png"
}
image_array[2].onmouseout = function()
{
    if(counter_array[2] == 1)
        image_array[2].src="../gallery/star_on.png"
    else
        image_array[2].src="../gallery/star_off.png" 
}

//image 4

image_array[3].onclick =function()
{
    imageOnclick(3,3) ;
}
image_array[3].onmousemove = function()
{
    image_array[3].src="../gallery/star_on.png"
}
image_array[3].onmouseout = function()
{
    if(counter_array[3] == 1)
        image_array[3].src="../gallery/star_on.png"
    else
        image_array[3].src="../gallery/star_off.png" 
}

//image 5

image_array[4].onclick =function()
{
    imageOnclick(4,4) ;
}
image_array[4].onmousemove = function()
{
    image_array[4].src="../gallery/star_on.png"
}
image_array[4].onmouseout = function()
{
    if(counter_array[4] == 1)
        image_array[4].src="../gallery/star_on.png"
    else
        image_array[4].src="../gallery/star_off.png" 
}