const event =require("events");
const fileEvent = new event()

fileEvent.on("fileCreated", ()=>{
        console.log("file created")
})
fileEvent.on("fileRead" , ()=>{
    console.log("file Read")
})
fileEvent.on("fileDeleted" ,()=>{
    console.log("file deleted")
})

fileEvent.emit("fileCreated")
fileEvent.emit("fileCreated")

fileEvent.emit("fileRead")
fileEvent.emit("fileDeleted")
