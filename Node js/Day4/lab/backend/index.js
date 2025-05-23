import express, { json } from "express";
import cors from "cors"
import  {UserRouter} from "./roots/user.js"
import  {todoRouter} from  "./roots/todo.js"

const app = express();

app.use(express.json());
app.use(cors());

import  mongoose  from 'mongoose';
mongoose.connect('mongodb://127.0.0.1:27017/todos-app')
    .then(() => {
    console.log("MongoDB connected");
    app.listen(3000, () => console.log("Server running"));
    })
    .catch(err => console.error("MongoDB connection error:", err));

app.use('/users', UserRouter);
app.use('/todos', todoRouter);

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: err.message || "Internal server error" });
});

app.listen(3000,()=>{
    console.log("server operate");
})

