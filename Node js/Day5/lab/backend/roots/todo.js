import express from "express";
const todoRouter =express.Router();
import {
    createTodo,
    getAllTodo,
    deleteTodo,
    updateTodo,
    getTodoByid
} from "../controllers/todo.js"

import {authorize} from "../middlewares/authorize.js";
// todo 
todoRouter.post( 
    "/",
    authorize(["admin","user"]),
    async (req, res,next) => {
    try{
        const title = req.body.title;
        const user = req.user;
        const createdMeesage = await createTodo({ title, userID: user._id });
        res.status(201).send(createdMeesage);
    }catch(error){
        next(error);
    }
    
})

todoRouter.get(
    "/",
    authorize(["admin","user"]),
    async (req, res,next) => {
        try{
            // get all todo that special to this user 
            const userId =req.user._id;
            console.log(userId)
            const todoList =await getAllTodo(userId);
            console.log(todoList);
            res.json(todoList);
        }catch(error){
            next(error)
        }
    }
);
todoRouter.get(
    "/:id",
    authorize(["admin"]),
    async (req, res,next) => {
        try{
            const todoList =await getTodoByid(req.params.id);
            res.json(todoList);
        }catch(error){
            next(error)
        }
    }
);
todoRouter.patch(
    "/:id",
    authorize(["admin"]),
    async(req,res,next)=>{
        try{
            const todo = await updateTodo(req.params.id , req.body);
            res.json(todo)
        }catch(error){
            next(error)
        }
})

todoRouter.delete(
    "/:id",
    authorize(["admin","user"]),
    async (req,res,next)=>{
        try{
            const toodId = req.params.id;
            const deletMessage = await deleteTodo(toodId)
            res.json(deletMessage)
        }catch(error){
            next(error);
        }
})

export{
    todoRouter ,
}