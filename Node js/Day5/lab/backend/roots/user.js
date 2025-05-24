import express from "express";
const UserRouter =express.Router();
import {
    createUser,
    getAlluser,
    deleteUser,
    updateUser,
    login
} from "../controllers/user.js" 
import {authorize} from "../middlewares/authorize.js";
// users
UserRouter.post(
    "/",
    // to check user role
    async (req, res, next) => {
    try {
    const user = await createUser(req.body);
        res.json(user);
    } catch (error) {
        next({error});
    }
}
);
UserRouter.post(
    "/login",
    async (req,res,next)=>{
    try{
        const result = await login(req.body);
        res.json(result);
    }
    catch(error){
        next({error ,status:401});
    }
})
UserRouter.get(
    "/",
    async (req, res,next) => {
        try{
            console.log("user")
            const userList = await getAlluser();
            res.json(userList);
        }catch(error){
            next(error);
        }
    
    }
);
UserRouter.delete(
    "/:id",
    async (req,res,next)=>{
        try{
            const userId = req.params.id;
            const deleteMessage =await deleteUser(userId)
            res.send(deleteMessage);
        }
        catch(error){
            next(error);
        }
})

UserRouter.patch(
    "/:id",
    authorize(["user"]),
    async (req,res,next)=>{
        try{
            const userId = req.params.id;
            const updateUse =await updateUser(userId,req.body );
            res.send(updateUse)
        }
        catch(error){
            next(error)
        }
})

export{
    UserRouter,
}