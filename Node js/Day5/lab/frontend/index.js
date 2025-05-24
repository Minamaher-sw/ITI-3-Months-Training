let user = document.getElementById("users")
let todo =document.getElementById("todo")

// registeration section 
const userData = {
    userName:"mariem10",
    firstName :"maher" ,
    lastName : "abanoub" ,
    Password:"mina" ,
    username :"mariem10"
}

fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
    })
    .then(res => res.json())
    .then(data => {
        console.log('✅ Successfully saved:', data);
    })
    .catch(err => {
        console.error('❌ Error:', err);
    });

// login section 
const loginUser={
    userName:"mariem8",
    Password:"mina",
}
fetch('http://localhost:3000/users/login', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(loginUser)
    })
    .then(res => res.json())
    .then(data => {
        localStorage.setItem('token',data);
    })
    .catch(err => {
        console.error('❌ Error:', err);
    });

// get all user 
fetch('http://localhost:3000/users')
        .then((res) => {
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
        })
        .then((data) => {
        user.innerHTML = `<h1>Users</h1>`;
        if (Array.isArray(data)) {
            for (const item of data) {
            user.innerHTML += `<p>${JSON.stringify(item)}</p><hr>`;
            }
        } else {
            user.innerHTML += `<p>No users found</p>`;
        }
        })
        .catch((err) => {
        console.error('❌ Error fetching users:', err);
        user.innerHTML = `<p style="color:red;">Failed to fetch users</p>`;
    });

// get all user todo section 
fetch('http://localhost:3000/todos',{
    headers: {
        'Content-Type': 'application/json',
        "authorization":localStorage.getItem("token")
    }}).then((res) => {
    res.json().then((data) => {
        todo.innerHTML =`<h1> Todo List  </h1>`;
        for(item of data){
            todo.innerHTML += `<p> ${JSON.stringify(item)}</p> <hr>`
        }
        console.log(data)
    });
});