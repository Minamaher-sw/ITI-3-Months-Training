
import {User} from '../models/user.js' ;
import bcrypt from 'bcryptjs';
const createUser = async (data)=>{
    // if (!fs.existsSync("../user.json")) {
    //         fs.writeFileSync("../user.json", "[]");
    //     }

        // const { userName, Password, lastName, firstName } = data;
        // const user = JSON.parse(fs.readFileSync("../user.json", "utf8"));
        // const nextId = user.length > 0 ? user[user.length - 1].id + 1 : 1;
    
        // const newUser = {
        //     id: data.length,
        //     userName: userName,
        //     Password: Password,
        //     lastName: lastName,
        //     firstName: firstName,
        // };
        // user.push(newUser);
        // console.log(user);
        // fs.writeFileSync("../user.json", JSON.stringify(user, null, 2));
        const user = await User.create(data);
        return user ;
}



const getAlluser=async ()=>{
    // const user = JSON.parse(fs.readFileSync("../user.json", "utf8"));
    //     const outPutArr = [];
    //     for (let userIndex of user) {
    //         const { id, lastName, firstName } = userIndex;
    //         const newuser = {
    //             _id:id,
    //             _lastName: lastName,
    //             _firstName_: firstName
    //         };
    //         outPutArr.push(newuser);
    //     }

    const  outPutArr = await User.find();
    return outPutArr ;
}

const deleteUser =(userId)=>{
    // const user = JSON.parse(fs.readFileSync("../user.json", "utf8"));
    // if(user.length > 0 )
    // {   const filterUsers = user.filter(user => user.id != userId);
    //     console.log(filterUsers);
    //     fs.writeFileSync("./user.json", JSON.stringify(filterUsers, null, 2));
    //     return "element deltetd"
    // }
    // else{
    //     return "element no found"
    // }
    return User.deleteOne({_id:userId});
}

const updateUser =async (userId,data)=>{
    // const user = JSON.parse(fs.readFileSync("../user.json", "utf8"));
    // if(user.length > 0 )
    // {   
    //     const newInfo =data;
    //     const updatedUsers = user.map(user =>
    //     user.id == userId ? {...user,
    //                         userName :newInfo.userName ?newInfo.userName  :user.userName ,
    //                         firstName :newInfo.firstName ?newInfo.firstName  :user.firstName, 
    //                         lastName :newInfo.lastName ?newInfo.lastName  :user.lastName ,
    //                         Password  :newInfo.Password ?newInfo.Password  :user.Password } 
    //                         : user);
    //     fs.writeFileSync("../user.json", JSON.stringify(updatedUsers, null, 2));
    // }
    // else{
    const updateUser = User.findByIdAndUpdate(
        { _id: userId },
        { $set: data },
        { new: true, runValidators: true }
    );
    return updateUser;
}

const login =async (data)=>{
    const {userName ,Password}=data ;
    console.log(userName);
    const user = await User.findOne({userName:userName});
    console.log(user);
    if(! user) 
        {
            throw "invalid login"
        };
    const valid = bcrypt.compareSync(Password ,user.Password);
    console.log(valid);
    return valid ;
}
export{
    createUser,
    getAlluser,
    deleteUser,
    updateUser,
    login,
}