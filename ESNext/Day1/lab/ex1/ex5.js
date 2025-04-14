let setArr =[1,2,3,4,4,5,6,7];
let resArr =new Set(setArr);
console.log(resArr);

var myset =new Set()
myset.add(1)
myset.add(1)
myset.add(2)
myset.add(3)
console.log(myset);

//map
let myMap=new Map()  //key , value
myMap.set("key1","valu1")
myMap.set("key2","valu2")
myMap.set("key4","valu2")
myMap.set("key1","valu3")


console.log(myMap.get("key1"));
console.log(myMap.get("key4"));

console.log(myMap.has("key1"));
console.log(myMap.delete("key1"));
