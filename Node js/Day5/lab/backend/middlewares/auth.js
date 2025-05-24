import jwt from "jsonwebtoken";
import { User } from "../models/user.js";
const auth = async (req, res, next) => {
    try {
        const { authorization } = req.headers;

        if (!authorization) {
            return res.status(401).json({ message: "authorization invalid" });
        }
        const payload = jwt.verify(authorization, process.env.JWT_SECRET);

        const user =await User.findOne({username:payload.username});
        if(! user){
            next({ message: "authorization invalid" ,status:401 })
        }

        req.user = user;
        next();
    } catch (error) {
        next(error);
    }
};

export{
    auth,
}