const fs =require("fs")

//check and create file
if(!fs.existsSync("./todos.json")){
    fs.writeFileSync("./todos.json","[]");
}

const [,,operation , title]=process.argv ;
switch(operation){
    case "add":
        if (!title){
            console.log("provide Entery text")
            process.exit(1)
        }
        const todo = JSON.parse(fs.readFileSync("./todos.json" ,"utf8"));
        const nextId =todo.length > 0 ? todo[todo.length-1].id +1 : 1;

        const newEntry ={
            id :nextId ,
            title:title ,
        }
        todo.push(newEntry);
        fs.writeFileSync("./todos.json",JSON.stringify(todo ,null,2))
        break ;
    case "list":
        const retData = JSON.parse(fs.readFileSync("./todos.json" ,"utf8"));
        if(retData.length > 0)
        {
            console.log(retData.map(todo => `Title: ID: ${todo.id} Title: ${todo.title} Status: pinding`)
    .join('\n'));
        }
        break ;
    default:
        console.log("no commend");
}
