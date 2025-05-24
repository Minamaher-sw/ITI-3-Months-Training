const authorize = (roles=[])=>{

    return (req,res,next)=>{

        if(!req.user.role){
            return res.status(403).json({message:"forbidden"})
        }
        if(!roles.includes(req.user.role)){
            return res.status(403).json({message:"unsuficint"})
        }
        next();
    }
}

export{
    authorize,
}