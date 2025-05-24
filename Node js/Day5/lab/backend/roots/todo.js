import express from "express";
const todoRouter =express.Router();
import {
    createTodo,
    getAllTodo,
    deleteTodo,
    updateTodo,
    getTodoByid,
    getAllTodoQuery
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
    authorize(["admin","user","reporter"]),
    async (req, res, next) => {
    try {
        const userId = req.user._id;

        if (req.query && (req.query.limit || req.query.status)) {
        const { limit, status } = req.query;
        const todoList = await getAllTodoQuery({ limit, status, userId });
        
        return res.json(todoList); //
        }
        const todoList = await getAllTodo(userId);
        return res.json(todoList);
    } catch (error) {
        return next(error);
    }
}

);
todoRouter.get(
    "/:id",
    authorize(["admin","reporter"]),
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