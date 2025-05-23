import http from "http"

const server =http.createServer((req,res)=>{
    if(req.url ==="/" )
        res.end("Home Page");
    else if(req.url ==="/about")
        res.end("about page")
    else{
        res.end("no found page")
    }
});

server.listen(3000,()=>{
    console.log("server runnig")
})