import express from "express";
const todoRouter =express.Router();
import {
    createTodo,
    getAllTodo,
    deleteTodo,
    updateTodo,
} from "../controllers/todo.js"

// todo 
todoRouter.post( "/",
    async (req, res,next) => {
    try{
        const createdMeesage =await createTodo(req.body);
        res.status(201).send(createdMeesage);
    }catch(error){
        next(error);
    }
    
})

todoRouter.get(
    "/",
    async (req, res,next) => {
        try{
            const todoList =await getAllTodo();
            res.json(todoList);
        }catch(error){
            next(error)
        }
    }
);
todoRouter.patch("/:id",
    async(req,res,next)=>{
        try{
            const todo = await updateTodo(req.params.id , req.body);
            res.json(todo)
        }catch(error){
            next(error)
        }
})

todoRouter.delete("/:id",
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