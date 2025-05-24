
import  {Todo} from '../models/todo.js' ;
const createTodo = async(data)=>{
    // if (!fs.existsSync("../toods.json")) {
    //         fs.writeFileSync("../toods.json", "[]");
    //     }

    //     const { title,status,tags} = data;
    //     const tood = JSON.parse(fs.readFileSync("../toods.json", "utf8"));
    //     const nextId = tood.length > 0 ? tood[tood.length - 1].id + 1 : 1;

    //     const newToods = {
    //         id: nextId,
    //         title: title,
    //         status: status,
    //         tags: tags,
    //         createdDate: new Date().toISOString(),
    //     };
    //     tood.push(newToods);
    //     fs.writeFileSync("../toods.json", JSON.stringify(tood, null, 2));
    const todo = await Todo.create(data);
    return todo ;
}

const getAllTodo=async ()=>{
    // const tood = JSON.parse(fs.readFileSync("../toods.json", "utf8"));
    //     const outPutArr = [];
    //     for (let userIndex of tood) {
    //         const { id, title, status ,tags } = userIndex;
    //         const newuser = {
    //             _id:id,
    //             title: title,
    //             status: status,
    //             tags:tags
    //         };
    //         console.log(newuser)
    //         outPutArr.push(newuser);
    //     }
        const  outPutArr = await Todo.find();
        return outPutArr ;
}

const getAllTodoQuery=async (queryObj)=>{
    // const tood = JSON.parse(fs.readFileSync("../toods.json", "utf8"));
    //     const outPutArr = [];
    //     for (let userIndex of tood) {
    //         const { id, title, status ,tags } = userIndex;
    //         const newuser = {
    //             _id:id,
    //             title: title,
    //             status: status,
    //             tags:tags
    //         };
    //         console.log(newuser)
    //         outPutArr.push(newuser);
    //     }
        const limit1 = parseInt(queryObj.limit);
        const status= queryObj.status;
        const  outPutArr = await Todo.find({status :status}).limit(limit1);
        return outPutArr ;
}
const deleteTodo =(userId)=>{
    // const tood = JSON.parse(fs.readFileSync("../toods.json", "utf8"));
    // if(tood.length > 0 )
    // {   const filterTodo = tood.filter(tood => tood.id != toodId);
    //     fs.writeFileSync("../toods.json", JSON.stringify(filterTodo, null, 2));
    //     return "element deleted" ;
    // }
    // else{
    //     return "no user founded";
    // }
    return Todo.deleteOne({_id:userId});
}

const updateTodo =(userId,data)=>{
    // const toodId = req.params.id;
    // const tood = JSON.parse(fs.readFileSync("../toods.json", "utf8"));
    // if(tood.length > 0 )
    // {   
    //     const newInfo =req.body;
    //     // const result = user.find(user => user.id == userId);
    //     // result.userName=newInfo.userName;
    //     // result.firstName =newInfo.firstName;
    //     // result.lastName = newInfo.lastName;
    //     // result.Password = newInfo.Password ;
    //     const updatedTood = tood.map(tood =>
    //     tood.id == toodId ? { ...tood, title :newInfo.title , status :newInfo.status, tags : newInfo.tags } : tood);
    //     console.log(updatedTood);
    //     fs.writeFileSync("../toods.json", JSON.stringify(updatedTood, null, 2));
    // }
    // else{
    // }
    const updateTodo = Todo.findByIdAndUpdate(
        { _id: userId },
        { $set: data },
        { new: true, runValidators: true }
    );
    return updateTodo;
}

export{
    createTodo,
    getAllTodo,
    deleteTodo,
    updateTodo,
    getAllTodoQuery
}