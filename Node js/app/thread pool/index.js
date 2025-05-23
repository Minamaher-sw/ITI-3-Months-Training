const {
    pbkdf2,
} = require('node:crypto');

process.env.UV_THREADPOOL_SIZE = 4;
const start = performance.now();
pbkdf2('secret', 'salt', 100000, 64, 'sha512', (err, derivedKey) => {
    if (err) throw err;
    console.log("consume time in ms is ",performance.now() - start);  // '3745e48...08d59ae'
});
pbkdf2('secret', 'salt', 100000, 64, 'sha512', (err, derivedKey) => {
    if (err) throw err;
    console.log("consume time in ms is ",performance.now() - start);  // '3745e48...08d59ae'
});
pbkdf2('secret', 'salt', 100000, 64, 'sha512', (err, derivedKey) => {
    if (err) throw err;
    console.log("consume time in ms is ",performance.now() - start);  // '3745e48...08d59ae'
});
pbkdf2('secret', 'salt', 100000, 64, 'sha512', (err, derivedKey) => {
    if (err) throw err;
    console.log("consume time in ms is ",performance.now()- start);  // '3745e48...08d59ae'
});
pbkdf2('secret', 'salt', 100000, 64, 'sha512', (err, derivedKey) => {
    if (err) throw err;
    console.log("consume time in ms is ",performance.now()- start);  // '3745e48...08d59ae'
});
pbkdf2('secret', 'salt', 100000, 64, 'sha512', (err, derivedKey) => {
    if (err) throw err;
    console.log("consume time in ms is ",performance.now()- start);  // '3745e48...08d59ae'
});
pbkdf2('secret', 'salt', 100000, 64, 'sha512', (err, derivedKey) => {
    if (err) throw err;
    console.log("consume time in ms is ",performance.now()- start);  // '3745e48...08d59ae'
});
pbkdf2('secret', 'salt', 100000, 64, 'sha512', (err, derivedKey) => {
    if (err) throw err;
    console.log("consume time in ms is ",performance.now()- start);  // '3745e48...08d59ae'
});

// network i/o
fetch(`https://dummyjson.com/todos`).then(()=>{
    console.log("consume time in ms is ",performance.now()- start);
})
fetch(`https://dummyjson.com/todos`).then(()=>{
    console.log("consume time in ms is ",performance.now()- start);
})
fetch(`https://dummyjson.com/todos`).then(()=>{
    console.log("consume time in ms is ",performance.now()- start);
})
fetch(`https://dummyjson.com/todos`).then(()=>{
    console.log("consume time in ms is ",performance.now()- start);
})
fetch(`https://dummyjson.com/todos`).then(()=>{
    console.log("consume time in ms is ",performance.now()- start);
})
fetch(`https://dummyjson.com/todos`).then(()=>{
    console.log("consume time in ms is ",performance.now()- start);
})
fetch(`https://dummyjson.com/todos`).then(()=>{
    console.log("consume time in ms is ",performance.now()- start);
})
fetch(`https://dummyjson.com/todos`).then(()=>{
    console.log("consume time in ms is ",performance.now()- start);
})
fetch(`https://dummyjson.com/todos`).then(()=>{
    console.log("consume time in ms is ",performance.now()- start);
})
fetch(`https://dummyjson.com/todos`).then(()=>{
    console.log("consume time in ms is ",performance.now()- start);
})
fetch(`https://dummyjson.com/todos`).then(()=>{
    console.log("consume time in ms is ",performance.now()- start);
})
console.log(start);