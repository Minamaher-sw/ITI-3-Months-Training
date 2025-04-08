var searchElment = document.getElementById("search");
let inter ;
let inter2 ;
searchElment.setAttribute("style",
        `
        border-radius: 5px;padding:5px 12px 5px 30px ;
        background-image: url(../gallery/searchIcon.png);
        background-repeat: no-repeat;
        background-size: contain;
        background-origin: padding-box;
        background-position: left;
        width:100px
        `
)

searchElment.onfocus =function()
{
    inter = setInterval(
        function()
        {
            let x = parseInt(searchElment.style.width);
            x += 10 ;
            searchElment.style.width = x+"px";
            if(x == 200)
            {
                clearInterval(inter) ;
            }
        },50
    )
}
searchElment.onblur =function()
{
    inter2 = setInterval(
        function()
        {
            let x = parseInt(searchElment.style.width);
            x -= 10 ;
            searchElment.style.width = x+"px";
            if(x == 100)
            {
                clearInterval(inter2) ;
            }
        },50
    )
}
