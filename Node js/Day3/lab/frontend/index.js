let user = document.getElementById("users")
let todo =document.getElementById("todo")
fetch('http://localhost:3000/users').then((res) => {
    res.json().then((data) => {
        user.innerText = JSON.stringify(data);
        console.log(data)
    });
});

fetch('http://localhost:3000/toods').then((res) => {
    res.json().then((data) => {
        todo.innerText = JSON.stringify(data);
        console.log(data)
    });
});