import  * as mongoosed from 'mongoose' 
import bcrypt from "bcryptjs";
const {Schema} = mongoosed.mongoose

const userSchema = new Schema({
    userName: {
        type:String,
        minlength:3,
        maxlength:15,
        required:true,
        unique: true
    },

    firstName: {
        type: String,
        minlength:3,
        maxlength:15,
        required:true,
    },

    lastName: {
        type: String,
        minlength:3,
        maxlength:15,
        required:true,
    },
    dob: {
        type: Date
    },
    Password: {
        type: String,
        minlength:3,
        maxlength:15,
        required:true
    },
    username: {
        type: String,
    },
    role:{
        type:String,
        enum:["admin","user"],
        default:"user"
    }
},{
    // apply on any object ret from user model
    toJSON: {
        transform: function (doc, ret,options) {
            delete ret.Password ;
            delete ret.username ;
            delete ret.__v ;
            ret.fullName = ret.firstName +" "+ret.lastName;
        }
    }
})

// hashing by using salting middle ware before save info 
userSchema.pre("save",function(){
    const hash =bcrypt.hashSync(this.Password ,8);
    this.Password =hash
})

const User = mongoosed.mongoose.model("User",userSchema)

export {
    User
} 