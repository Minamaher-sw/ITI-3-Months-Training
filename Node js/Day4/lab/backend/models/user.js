import  * as mongoosed from 'mongoose' 
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
    }
})


const User = mongoosed.mongoose.model("User",userSchema)

export {
    User
} 