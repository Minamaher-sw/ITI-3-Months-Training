// let str="imna Miada meeeni"
// let pattern = /mn/
// console.log(str.match(pattern))
// console.log(pattern.test(str))

// ranges
// (valu1 | valu2 | vlau3)
// let email1="123%@maher.com.eg"
// let email2="mina@maher.net"
// let email3="mina@maher.io"

// let emailPattern = /^([a-zA-Z0-9.%-]{3,})@([a-zA-Z0-9]{3,})\.(com|net|io)\.eg$/

// console.log(emailPattern.test(email1));
// console.log(emailPattern.test(email2));
// console.log(emailPattern.test(email3));

// let randomStr="miina123@#$%^&0++^ghgMMICcBb"
// console.log(randomStr.match(/[a-z]/ig))
// console.log(randomStr.match(/[^a-z]/ig))
// console.log(randomStr.match(/[^a-z0-9%^]/ig))
// console.log(randomStr.match(/[^a-zA-Z0-9]/g))
// console.log(randomStr.match(/[a-z0-9]/ig))

// console.log(randomStr.match(/^([abc]){3,}/))

/* ############# Character Classes ############### */

// let charString ="1234whjhdbhgdsuygygyg@@@..com...w@y.com##y@y.net  __h@jkcom"
// // ( . ) match all except newline line terminators
// console.log(charString.match(/./g))

// //\w and \W
// console.log(charString.match(/\w/g))
// console.log(charString.match(/\W/g))

// //\d and \D
// console.log(charString.match(/\d/g))
// console.log(charString.match(/\D/g))

// //\s \S
// console.log(charString.match(/\s/g))
// console.log(charString.match(/\S/g))

// //simple emmail validation
// console.log(charString.match(/\w@\w\.(com|net)/g))

//part 2
//\b and \B

// let str = "12spam spam12 spam333 isspambn "

// //match any word start and end with spam word
// console.log( str.match(/(\bspam|spam\b)/g));
// console.log( str.match(/(\Bspam|spam\B)/g));


/* ########################    Regular Expressions - Quantifiers Part 1 ##############
    ### +   one or more 
    ### *   zero or more
    ### ?   zero or one 
*/

// let str ="a@nn.com mina@maher.com elcomandar@gmail.net mosadef5@gmail.eg" //all valid emails

// let pattern =/\w+@\w+\.(com|net|eg)/ig
// console.log(pattern.test(str))
// console.log(str.match(pattern))

// let str2 ="0110 023 088970 00 450"
//patern get number or match numbers start and end with 0
//00  0110 bet them zero or more digit so we use *

// let patern2 =/0\d*0/ig
// console.log(patern2.test(str2))
// console.log(str2.match(patern2))

//  using of ? zero or one
// let str3 ="https://google.com http://www.google.com google.net" // all valid URLS
/*
    first case
    https and http difff is s char so 
    we nead https but s is found or not so    s?

    second case
    some url contain www. or not 
    (www\.)? is found or not 

    third case
    https://  is found or not
    (https://)?

*/
// let patern3 =/(https?:\/\/)?(www\.)?\w+\.(com|net)/ig
// console.log(patern3.test(str3))
// console.log(str3.match(patern3))

/* ############## Regular Expressions - Quantifiers Part 2 ################## */
// let numStr="S100S  S3000S S6000000S"
// let patr1 = /s\d{3}s/ig
// let patr2 = /s\d{3,6}s/ig
// let patr3 = /s\d{3,}s/ig
// console.log(numStr.match(patr1));
// console.log(numStr.match(patr2));
// console.log(numStr.match(patr3));

/* ############## Regular Expressions - Quantifiers Part 3 ################## */
let strMessage ="we love programing"

let randomMsg ="1OsameZ 2AhmedZ 3mohmaedZ 4MoustafeZ 5Maherd"


// ^ start with
console.log((/^\d/g).test(randomMsg))
console.log(/z$/ig.test(randomMsg))

//?= and ?!  foolwed by
console.log(randomMsg.match(/\w{8}(?!z)/ig))