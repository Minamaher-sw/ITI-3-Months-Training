import  mongoose from 'mongoose';

const { Schema } = mongoose;

const todoSchema = new Schema({
    title: {
        type: String,
        minlength: 3,
        maxlength: 50,
        required: true,
    },
    status: {
        type: String,
        enum: ['new', 'done'],
    },
    userID:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"User",
        required:true,
    }
});


const Todo = mongoose.model('Todo',todoSchema)

export 
{
    Todo
}