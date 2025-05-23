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
});


const Todo = mongoose.model('Todo',todoSchema)

export 
{
    Todo
}