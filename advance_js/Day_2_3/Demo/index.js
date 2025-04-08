//functions types======================================

/**
 * 1-statement /static /Declarative function
 * 2-Anonymous function
 * 3-literal function /function expression
 * 4-self-invoked function expression
 * 5-Dynamic function
 * 6-Arrow function  ==>Es.6
 */
//statement /static / Declarative function======================

//parsed once
//no memory leaks
//hoisted

// sayHello()

// function sayHello( ){
//     console.log("I am a Declarative function");

// }

//call
// sayHello()

//Anonymous function=======================================

// let arr=[
//     1,"item",
//     function(){
//         console.log( "I am a Anonymous function ");

//     },
//     function(){
//         console.log( "I am a Anonymous function ");

//     },
// ]

// arr[2]()
//or
// var res=arr[2]
// res()

// let obj={
//     name:"ali",
//     age:20,
//     printData:function(){
//         console.log( "I am a Anonymous function ");
//     }
// }
// obj.printData()

//Literal function / function expression  ==================================

// var literalFun=function(){
//     console.log("I am a function expression");

// }

// literalFun()

// literalFun()

// sum(10,5) not hoisted

// var sum =function(x,y){
//     console.log(x+y);

// }

// sum(2,5)
// sum(10,5)

//self-invoked function expression (IIFE) =====================
//Immediate Invoke Function Expression
//()

// (function sayhello(){
//     console.log("I am a IIFE");

// })()

// (function sum(x,y){
//     console.log(x+y)

// })(2,5)

//Dynamic function ================================================

// var sum = new Function("x","y","  return x+y ")
// var sum = new Function("x","y"," let res=x+y ; return res ")

// console.log(sum(2,5));

// var sub = new Function("x","y","return x-y ")

// console.log(sub(10,5));

//or

// function Dynamic(operator){

//     return new Function("x","y","return x"+operator+"y")
// }

// console.log(Dynamic("+")(2,5));
// console.log(Dynamic("-")(10,5));

// var res=Dynamic("+")
// console.log(res(5,4));

// var sum=Dynamic("+")
// console.log(sum(1,5));

//Arrow function===============================
//void
// var sum=(x,y)=>{
// return x+y
// }
// console.log(sum(2,5));

//callback function==============================

// setInterval(function log(){
//     alert("hello")
// },1000)

// setInterval(function(){   //anonymous
//     alert("hello")
// },1000)

// setInterval(()=>{   //anonymous
//     alert("hello")
// },1000)

// function log(){
//         alert("hello")
//     }

// var print=function (){
//     alert("hello")
// }

//   setInterval(print ,1000)   //callback

// arguments  [ ] ==>property=================================

// function argumentsFun(){

//     let res=0
//     for(var i=0;i<arguments.length;i++){
//         res+=arguments[i]
//     }

//     console.log(res);

// }

// argumentsFun()
// argumentsFun(2,5)   //[  11,22,  ]
// argumentsFun(2,5,5)
// argumentsFun()

//

//Object===============================================
// let obj={
//     name:"ali",
//     age:20
// }

// let obj2={
//     name:"sara",
//     age:20
// }

//constructor funtion (){}
//custom object ======================================

//function funcName(){}

//constructor function ============================================

//create object ===>properties , methods

//OOP ==>classless

//Encapsulations ===>wrapping properties and methods single unite

function Person(name = "ahmed", age = 25) {
  //member properties

  // this.nameOFProp=name
  this._name = name;
  this._age = age;

  //member method

  // this.nameOfMethod=function(){// }

  this.sayHello = function () {
    console.log(" hello " + this._name);
  };
  this.printData = function () {};
  //abstractions
  //   var x=20
  //   var sum=function(){

  //   }
}

// console.log(Person.prototype);
//prototype==> add properties
Person.prototype.Address = "sohag";
//prototype ==> add methods
Person.prototype.sayHello2 = function () {
  // console.log("hello.......................");
  console.log("hello......................." + this._name);
};

var person1 = new Person("ali", 20);
console.log(person1);
console.log(person1.Address);

person1.sayHello();
person1.sayHello2();

var person2 = new Person("sara", 25);
console.log(person2);

// var person3=new Person()
// console.log(person3);

//inheritance in js ====================================
//classic js
function Student(name, age, level) {
  Person.call(this, name, age);
  this._level = level;
  this.helloMearn = function () {};
}

// var studen1 = new Student("hoda", 30, 10);
// console.log(studen1);

// //way 2 to inherit
// Student.prototype=new Person()

/**
 * types of function
 * create object
 * new fun()
 */

