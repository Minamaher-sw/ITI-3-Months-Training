const event = require("events")

const login =new event()
login.on("userLoggedIn",(username)=>{
    console.log(`User logged in ${username}`);
})

login.emit("userLoggedIn","mina")
login.emit("userLoggedIn","mahmoud")
login.emit("userLoggedIn","karim")