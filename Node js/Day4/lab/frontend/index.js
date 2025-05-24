let user = document.getElementById("users")
let todo =document.getElementById("todo")
fetch('http://localhost:3000/users').then((res) => {
    res.json().then((data) => {
        user.innerHTML =`<h1> Users </h1>`;
        for(item of data){
            user.innerHTML += `<p> ${JSON.stringify(item)}</p> <hr>`
        }
        console.log(data)
    });
});

fetch('http://localhost:3000/todos').then((res) => {
    res.json().then((data) => {
        todo.innerHTML =`<h1> Todo List  </h1>`;
        for(item of data){
            todo.innerHTML += `<p> ${JSON.stringify(item)}</p> <hr>`
        }
        console.log(data)
    });
});