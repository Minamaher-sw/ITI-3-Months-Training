import express, { json } from "express";
import cors from "cors"
import fs  from "fs";
const app = express();

app.use(express.json());
app.use(cors());
app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>')
})

app.listen(3000,()=>{
    console.log("server operate");
})

// users
app.post(
    "/users",
    (req, res, next) => {
    const { userName, Password, lastName, firstName } = req.body;
    console.log(userName);
    if (userName && Password && lastName && firstName) {
        next();
    } else {
        res.send("user not valid");
    }
    },
    (req, res) => {
    if (!fs.existsSync("./user.json")) {
        fs.writeFileSync("./user.json", "[]");
    }

    const { userName, Password, lastName, firstName } = req.body;
    const user = JSON.parse(fs.readFileSync("./user.json", "utf8"));
    const nextId = user.length > 0 ? user[user.length - 1].id + 1 : 1;

    const newUser = {
        id: nextId,
        userName: userName,
        Password: Password,
        lastName: lastName,
        firstName: firstName,
    };
    user.push(newUser);
    fs.writeFileSync("./user.json", JSON.stringify(user, null, 2));
    res.send("created");
}
);

app.get(
    "/users",
    (req, res,next) => {
        if (!fs.existsSync("./user.json")) {
            res.send("no user");
        } else {
            next();
        }
    },
    (req, res) => {
        const user = JSON.parse(fs.readFileSync("./user.json", "utf8"));
        const outPutArr = [];
        for (let userIndex of user) {
            const { id, lastName, firstName } = userIndex;
            const newuser = {
                _id:id,
                _lastName: lastName,
                _firstName_: firstName
            };
            outPutArr.push(newuser);
        }
        res.json(outPutArr);
    }
);
app.delete("/users/:id",
    (req, res,next) => {
        if (!fs.existsSync("./user.json")) {
            res.send("no user");
        } else {
            next();
        }
    },
    (req,res)=>{
    const userId = req.params.id;
    const user = JSON.parse(fs.readFileSync("./user.json", "utf8"));
    if(user.length > 0 )
    {   const filterUsers = user.filter(user => user.id != userId);
        console.log(filterUsers);
        fs.writeFileSync("./user.json", JSON.stringify(filterUsers, null, 2));
        res.send("element deleted");
    }
    else{
        res.send("no user founded")
    }
})

app.patch("/users/:id",
    (req, res,next) => {
        if (!fs.existsSync("./user.json")) {
            res.send("no user");
        } else {
            next();
        }
    },
    (req,res)=>{
    const userId = req.params.id;
    const user = JSON.parse(fs.readFileSync("./user.json", "utf8"));
    if(user.length > 0 )
    {   
        const newInfo =req.body;
        // const result = user.find(user => user.id == userId);
        // result.userName=newInfo.userName;
        // result.firstName =newInfo.firstName;
        // result.lastName = newInfo.lastName;
        // result.Password = newInfo.Password ;
        const updatedUsers = user.map(user =>
        user.id == userId ? { ...user, userName :newInfo.userName , firstName :newInfo.firstName, lastName : newInfo.lastName ,Password  : newInfo.Password  } : user);
        console.log(updatedUsers);
        fs.writeFileSync("./user.json", JSON.stringify(updatedUsers, null, 2));
        res.send("update sucess")
    }
    else{
        res.send("no user founded")
    }
})

// todo 
app.post( "/toods",
    (req, res, next) => {
    const { title,status,tags:[...args]} = req.body;
    if (title && status) {
        next();
    } else {
        res.send("toods not valid");
    }
    },(req,res,next)=>{
        const { title} = req.body;
        if(title.length > 3)
        {
            next();
        }
        else{
            res.send("toods length must be more than 3")
        }
    },
    (req, res) => {
    if (!fs.existsSync("./toods.json")) {
        fs.writeFileSync("./toods.json", "[]");
    }

    const { title,status,tags} = req.body;
    const tood = JSON.parse(fs.readFileSync("./toods.json", "utf8"));
    const nextId = tood.length > 0 ? tood[tood.length - 1].id + 1 : 1;

    const newToods = {
        id: nextId,
        title: title,
        status: status,
        tags: tags,
        createdDate: new Date().toISOString(),
    };
    tood.push(newToods);
    fs.writeFileSync("./toods.json", JSON.stringify(tood, null, 2));
    res.status(201).json(newToods);
})

app.get(
    "/toods",
    (req, res,next) => {
        if (!fs.existsSync("./toods.json")) {
            res.send("no user");
        } else {
            next();
        }
    },
    (req, res) => {
        const tood = JSON.parse(fs.readFileSync("./toods.json", "utf8"));
        const outPutArr = [];
        for (let userIndex of tood) {
            const { id, title, status ,tags } = userIndex;
            const newuser = {
                _id:id,
                title: title,
                status: status,
                tags:tags
            };
            console.log(newuser)
            outPutArr.push(newuser);
        }
        res.json(outPutArr);
    }
);
app.patch("/toods/:id",
    (req, res,next) => {
        if (!fs.existsSync("./toods.json")) {
            res.send("no user");
        } else {
            next();
        }
    },
    (req,res)=>{
    const toodId = req.params.id;
    const tood = JSON.parse(fs.readFileSync("./toods.json", "utf8"));
    if(tood.length > 0 )
    {   
        const newInfo =req.body;
        // const result = user.find(user => user.id == userId);
        // result.userName=newInfo.userName;
        // result.firstName =newInfo.firstName;
        // result.lastName = newInfo.lastName;
        // result.Password = newInfo.Password ;
        const updatedTood = tood.map(tood =>
        tood.id == toodId ? { ...tood, title :newInfo.title , status :newInfo.status, tags : newInfo.tags } : tood);
        console.log(updatedTood);
        fs.writeFileSync("./toods.json", JSON.stringify(updatedTood, null, 2));
        res.send("update sucess")
    }
    else{
        res.send("no user founded")
    }
})

app.delete("/toods/:id",
    (req, res,next) => {
        if (!fs.existsSync("./toods.json")) {
            res.send("no user");
        } else {
            next();
        }
    },
    (req,res)=>{
    const toodId = req.params.id;
    const tood = JSON.parse(fs.readFileSync("./toods.json", "utf8"));
    if(tood.length > 0 )
    {   const filterTodo = tood.filter(tood => tood.id != toodId);
        fs.writeFileSync("./toods.json", JSON.stringify(filterTodo, null, 2));
        res.send("element deleted");
    }
    else{
        res.send("no user founded")
    }
})