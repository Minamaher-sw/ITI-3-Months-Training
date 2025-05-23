import express from "express";
const UserRouter =express.Router();
import {
    createUser,
    getAlluser,
    deleteUser,
    updateUser,
} from "../controllers/user.js" 

// users
UserRouter.post(
    "/",
    async (req, res, next) => {
    try {
    const user = await createUser(req.body);
        res.json(user);
    } catch (error) {
        next({error});
    }
}
);

UserRouter.get(
    "/",
    async (req, res,next) => {
        try{
            const userList = await getAlluser();
            res.json(userList);
        }catch(error){
            next(error);
        }
    
    }
);
UserRouter.delete("/:id",
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

UserRouter.patch("/:id",
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