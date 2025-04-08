//OOP in Js =================================
//constructor function
//custom object
// var Person=function(name,age,salary){
// //prop
// this.n=name
// this.a=age
// this.s=salary

// //method
// this.sayHello=function(){

// }
// }

// var per1=new Person("sara",25,10000)
// console.log(per1);

// var str=new String()
// {
// n:value
// a:value
// s:value

// }

//Factory Function =================================
// let course1={
//     name:"Js",
//     hours:30
// }
// let course2={
//     name:"AdvJs",
//     hours:18
// }

// var Course=function(name,hours){

//     let obj={
//         _name:name,
//         _hours:hours

//     }
//     return obj
// }

// var course1=Course("js",30)
// var course2=Course("Advjs",18)
// console.log(course1);
// console.log(course2);

//Shadowing======================================================
//
// var x = "hello";
// function sum() {
//   var x = 5;
//   console.log(x); //5

//   console.log(window.x); //hello
//   // console.log(window);
// }

// sum();
// console.log(x); //hello

//Inner functions=========================================

// function outer() {
//   var x = 5;
//   function inner() {
//     var y = 10;
//     // console.log(x + y);
//     return x+y
//   }

//   return inner(); //  15
// }

// console.log(outer());

//closure ========================================================

// var b=30
// function outer() {
//   var x = 10; //x=10
//   function inner() {
//     var y = 20; //y=20
//     return x + y; //x=10 y=20
//   }
//   return inner;
// }
// var res = outer(); //fun inner     function inner(){  var y=20     return x+y }
// res(); //x+y  10+20=30
// console.log(res());

//custom onerror===============================

// onerror=function(msg,url,line,col,err){

//     console.log(msg,url,line,col,err);

// }

//  alerttt('sssssssss')
// log()

//Binding===================================

// let obj={
//     name:"sara",
//     age:20
// }

// console.log(obj.name);

/**
 * 1-default binding=============================
 */
//this keywords
// console.log(this);  //window

/**
 * 2-implicit binding=============================
 */

// let obj = {
//   name: "sara",
//   age: 20,
//   printData: function () {
//     console.log("name is " + this.name);
//     console.log(this);
//   },
// };

// obj.printData();

/**
 * 3-new binding=============================
 */
// function person(){

// }

// var per=new person()

/**
 * 4-Explicit binding=============================
 */
//call, apply , bind
// let obj = {
//   name: "sara",
//   age: 20,
//   printData: function () {
//     // console.log("name is " + this.name); //sara
//     // console.log(this);
//     var sayHello = function (msg1, msg2) {
//       //
//       console.log(this.name); //
//       // console.log(this);
//       console.log(msg1, msg2);
//     }.bind(this, "hello", "hello");
//     //bind
//     //    var res= sayHello.bind(this,"hello1","hello2")
//     //    res()
//     //call , apply
//     // sayHello.call(this,"hello1","hello2")
//     // sayHello.apply(this,"hello1","hello2")
//     sayHello();
//   },
// };

// obj.printData();

//ES.6

//5-lexically bound.. Arrow func///////////////////////////

// let obj2 = {
//     name: "sara",
//     age: 20,
//     printData: function () {
//       // console.log("name is " + this.name); //sara
//       // console.log(this);
//       var sayHello=()=> {
//         //
//         console.log(this.name); //
//         // console.log(this);
//         // console.log(msg1, msg2);
//       }

//       sayHello();
//     },
//   };
//   obj2.printData()

//call , bind , apply

// let obj = {
//   name: "ali",
//   age: 20,
//   print: function () {
//     console.log(this.name);
//   },
// };

// let obj2 = {
//   name: "rana",
//   age: 20,
// };
// var res = obj.print.bind(obj2);
// res();
//  obj.print.call(obj2)
//  obj.print.apply(obj2)

//

// let str="hello"

// let arr=[10,30,40]
// console.log(str.join(' #'));
// console.log([].join.call(str,' #'));
// console.log([].join.apply(str,' #'));
// var res=[].join.bind(str,' ')
// res()


/**
 * factory function
 * shadowing
 * inner function
 * closure
 * Binding
 * call ,bind, apply
 */