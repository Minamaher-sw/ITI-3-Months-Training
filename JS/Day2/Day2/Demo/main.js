//var x;
// "use strict"
//  x=5;
// console.log(x);

//hoisting===========================
//var x=undefiend
//let y ===> error
// console.log(x);
// console.log(y);

// var x=5

// let y=10

//for of , for in =============================================================================

// var arr=["item1","item2","item3"]

// for (var i of arrayName){

// }
// for(var item of arr){  //value
//     console.log(item);

// }

// for (var i in arrayName){

// }
// for(var item in arr){  //index
//     // console.log(item);
//   console.log(arr[item]);

// }

//value type , reference type============================================================

// var x=10
// var y=x //value type
// y=20
// console.log("x :" ,x); //10
// console.log("y :" ,y);  //20

// var arr=[1,2,3]
// var arr2=arr  //refernce

// arr2[0]=90
// console.log("arr: ", arr);
// console.log("arr2: ", arr2);  //[90,2,3]

//built in object===================================================================

//js classless

// class ClassName{

//property

//method

//}
// class String{
//length;
//method

// }

//String=======================================================================
//create string

//implicit string
// var str="hello............"

//explicit string
// var  str=new String("hello....")  //bind to any object
// var  str=new String()  //bind to any object

var str = "helloooeee";

// console.log(str.length);  //prop1
// console.log(str.charAt(1));  //method  charAt(index)
// console.log(str.indexOf("e"));  //method  indexOf(text)
// console.log(str.includes("he"));  //method  includes(text)
// console.log(str.lastIndexOf("o"));  //method  (text)
// console.log(str.substring(1,3));
// console.log(str.substring(3));

// console.log((str.replace(/e/,"$")));
// console.log((str.replace(/e/g,"$")));
// console.log((str.replaceAll()));

// console.log((str.toLowerCase()));
// console.log((str.toUpperCase()));

//Math object==========================================================

// console.log(Math.PI);
// console.log(Math.pow(2,3));  //2^3
// console.log(Math.random()*10);  //
// console.log(Math.round(0.7));
// console.log(Math.floor(10.7));  //10
// console.log(Math.ceil(10.7));   //11
// console.log(Math.abs(-10));   //10
// console.log(Math.sqrt(49));  //7
// console.log(Math.min(49,20,10));  //10
// console.log(Math.max(49,20,10));  //10

//Array Object=========================================================

// var arr=[2,10,3,20]

//or
// var arr=new Array()
// arr[0]=2
// arr[1]=10
// arr[2]=3
//or

// var arr=new Array(2,10,3)

//or
var arr = [];
arr[0] = 2;
arr[1] = 10;
arr[2] = 3;
arr[3] = 20;

// console.log(arr.length);
// console.log(arr.join(" "));
// console.log(arr.join("$"));
// console.log(arr.push(50));    //5
// console.log(arr);
// console.log(arr.pop());
// console.log(arr);
// console.log(arr.unshift(50));  //5
// console.log(arr.shift());  //50
// console.log(arr.reverse());

// console.log(arr);

// console.log(arr.sort()); //[10,2,3]
//callback function ====================================================
//function pass as paremeter to another function

// var arrSort= arr.sort( function (num1,num2){
// return  num1-num2
//  } )

// var arrSort= arr.sort( function (num1,num2){
//     return  num2-num1
//      } )
// console.log(arrSort);
//##find################################

// console.log(arr.find(function(ele){  //find ==>first match
//     return ele<5
// }));
//##filter################################
// console.log(arr.filter(function(ele){  //[2,3]
//     return ele<5
// }));

//#############################################
// var arr=new Array()
// //key , value
// arr["key1"]="value1"
// arr["key2"]="value2"
// console.log(arr);

// for(var i in arr){
//     console.log(i);

// }

// for(var i of arr){
//     console.log(i);

// }

//Date object============================================

// var date=new Date()
// console.log(date.getDate());
// console.log(date.getHours());
// console.log(date.toLocaleTimeString());
// console.log(date.toString());

// var date=new Date("3")

//Number object====================================================

// var num=new Number()
// console.log(num.to);

//RegExp=============================================================
//
// var Res=new RegExp(,i)

// var res=/^j.*t$/i
// console.log(res.test("jt"));  //true
// console.log(res.test("sarajt"));  //false
// console.log(res.test("javascriptmearn"));  //false
// console.log(res.test("JscripT"));  //false

// var num=/^(01)(1|2|0|5)[0-9]{8}$/   //010 , 011 ,012 ,015

// console.log(num.test("01021188566"));

// var pass=/^ [A-Za-z] {2,10} $/

//Error========================================================

// var err=new Error("erorrrrrrrrrrrrrrrrrr")

// throw err

// throw "errorrrrrrrrr"

//hanling error

// try {
//   var address = prompt("enter you address");
//   if (address == "sohag") {
//     alert("welcome......");
//   } else {
//     throw "errorrrrrrr";
//   }
// } catch (err) {
//   console.log(err);
// } finally {
//   console.log();
// }


//
//for in , for of
//built in object (String, Array , Date ,Error ,Math , RegExp)
//try{}catch(){ }


//
// let obj={
//     name:"ali",
//     age:20,

// }
// var arr=[
//     {   name:"ali",
//         age:20,
//     },
//     {   name:"ahmed",
//         age:20,
//     },
//     {   name:"ali",
//         age:20,
//     },
//     {   name:"ali",
//         age:20,
//     },
    
// ]
// // console.log(arr[1].name);
// console.log(arr[3].age);

