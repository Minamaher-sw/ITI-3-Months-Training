//custom Events===============================================
//fire

// var myEvent = new Event("eventName");

// var myEvent = new Event("randomColor");

// document.getElementById("para").addEventListener("randomColor", function () {
//   //rgb(r,g,b)  ==>red green blue  0 255
//   var r = Math.floor(Math.random() * 255);
//   var g = Math.floor(Math.random() * 255);
//   var b = Math.floor(Math.random() * 255);

//   // this.style.color="rgb(r,g,b)"
//   // this.style.color="rgb("+r+","+g+","+b+")"
//   this.style.color = `rgb(${r},${g},${b})`;
// });
// //fire event

// setInterval(function () {
//   document.getElementById("para").dispatchEvent(myEvent);
// }, 1000);

//object Object=========================================================

// let obj = {
//   name: "Hoda",
//   age: 30,
// };

// console.log(Object.keys(obj));  //[keys]
//console.log(Object.entries(obj));  // [ [prop, value],[] ]
// console.log(Object.values(obj)); //[values]
//seal()=================================================
// console.log(Object.seal(obj));
// // delete obj.name
// // obj.name="sara"    //
// obj.address="sohag"
// console.log(obj);

//freeze()================================================
// console.log(Object.freeze(obj));
// delete obj.name
// obj.name="sara"
// console.log(obj);

//accessor descriptors==========================================
//get , set

// let obj = {
//   fname: "Hoda",
//   lname: "ali",

//   age: 30,

//   get fullName() {
//     //function
//     console.log(this.fname + " " + this.lname);
//   },
//   set fullName(value) {
//     //[ ]
//     [this.fname, this.lname] = value.split(" ");
//   },
// };

// obj.fullName; //prop  //get

// obj.fullName = "sara Ahmed"; //set
// // console.log(obj.fullName);
// obj.fullName; //get
// console.log(obj);

//create()======================================

// console.log(Object.create(obj));  //{ }

// var obj2=Object.create(obj)
// obj2.fname="ali"
// console.log(obj2.fname);
// console.log(obj2);

// console.log(obj.__proto__);

//assign()================================

let obj = {
  name: "ali",
  age: 20,
};
// obj.address
// let obj2 = {
//   address: "sohag",
// };

// // var res=Object.assign({},obj,obj2)  //{ }
// console.log(res);

// console.log(obj);

//defineProperty====================================
let emp = {
  // age:20
};
// delete emp.age
// Object.defineProperty(objectName,"propName",{
// // decriptors
// })

// Object.defineProperty(emp, "name", {
//   value: "Ahmed",
//   configurable: true, //access to delete  , true ==>delete  , false id default.
//   writable: false, //edit
//   enumerable: false, //loop 
// });

// // delete emp.name
// emp.name = "Ali";
// // console.log(emp);

// for (const element in emp) {
//   console.log(emp[element]);
// }


//defineProperties================================================
let emp2 = {
    // age:20
  };

//   Object.defineProperties(objectName,{
//     propname:{
//        descriptors 
//     },
//     propname:{
//         descriptors 
//      },
//   })

// Object.defineProperties(emp2,{
//     name:{
//         value:"ali",
//         configurable:true,  
//         writable:true,
//         enumerable:true
//     },
//     age:{
//         value:30,
//         configurable:false,
//         enumerable:true
//     }
// })

// for (const element in emp2) {
//     console.log(emp2[element]);
    
// }

/**
 * custom events
 * object Object
 * Object
 * [
 * keys()
 * values()
 * seal()
 * freeze()
 * create()
 * assign({},)
 * defineProperty
 * set 
 * get
 * ]
 */

let obj1={

}
let obj2={
    
}


// console.log(Object.assign(obj1,obj2));
// console.log(new String());
