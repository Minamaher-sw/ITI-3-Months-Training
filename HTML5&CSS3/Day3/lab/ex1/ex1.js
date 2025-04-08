let imag =document.images[0];
let on =document.getElementById("on")
let spead1 =document.getElementById("spead1");
let spead2 =document.getElementById("Spead2")
let spead3 =document.getElementById("spead3");
let off =document.getElementById("off");

function determinSpead(time)
{
    imag.style.animationName ="FanOn";
    imag.style.animationDuration= time;
    imag.style.animationTimingFunction="linear";
    imag.style.animationIterationCount = "infinite";
}
on.onclick =function()
{
    determinSpead("6s")
}
spead1.onclick =function(){
    determinSpead("4s")
}
spead2.onclick =function()
{
    determinSpead("2s")
}
spead3.onclick =function()
{
    determinSpead("1s")
}
off.onclick =function()
{
    determinSpead("0s")
}
