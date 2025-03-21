// 1-	Try this code using strict mode and without strict mode, what’s the difference? And why?
function foo() {
    var x;
    x = 5;
    y = 6;    
    return x + y;
}
console.log(foo());
"use strict"
function foo() {
    var x;
    x = 5;
    var y = 6;    
    return x + y;
}
console.log(foo());

//ex 2
var y;	
y=10; 
x = 5; 
console.log(x); 
console.log(y); 
var x; 

// errors
function test(){
	for (let i = 0; i < 10; i++) {
  		alert(i);
		alert (x);
		let x=10;
	}
console.log(i);
}
test()
