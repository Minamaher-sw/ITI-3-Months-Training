const add =function add(a, b){
    console.log(a+b)
}
const subtract =function subtract(a, b){
    console.log(a-b)
}
const multiply =function multiply(a, b){
    console.log(a*b)
}
const divide =function divide(a, b){
    if( b == 0){
        throw "not divide by 0"
    }
    else{
        console.log(a/b)
    }
}
export{
    add,
    subtract,
    multiply,
    divide
}