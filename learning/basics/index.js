//Single line Comments
/* 
    Multi Line Comments
    It can be used for commenting multiple lines
*/

/*
-> This Comment is used to pop up the message to the user
alert("Hello World");
alert(
    3+5
);
*/

// 1.Working with variables
/*
let admin ;
let nameUser = 'John';
admin = nameUser;
alert(admin);
*/

// 2.Working with varibales
/*
let ourPlanetName = 'Earth';
let currentVisistorName = 'Visitor_Name';
*/

// 3.Working with Variables(Const)

// The Below code returns the currnet year
//const date = new Date().getFullYear();
//If We pass a particular DOB in the Date() argument it will return that year 

/*
const BIRTHDAY = '30.12.2003';
const AGE = someCode(BIRTHDAY);
console.log(AGE);
alert(AGE);

function someCode(e){
    q = e.split('.');
    return date-q[2];
}
*/
/*

--> Exercise

let myName = "Sathish";
alert(`My name is ${1}`);
alert(`My name is ${myName}`);
alert(`My name is ${"name"}`);

*/

/*

All these methods are modal: they pause script execution and don’t allow the visitor to interact with the rest of the page until the window has been dismissed.

-->Interaction with promt,confirm,alert
let b = prompt('Enter your name',"sathish");
let con = confirm("Are you the User");
-->The above function confirm() will return true or false
alert(con);

*/

/*
let type = true;
console.log(typeof type);
//String() method converts anything into a string which given as arguments
type = String(type);
console.log(typeof type);

let exampleNumber = '123';
let str = "Sathish"
console.log(typeof exampleNumber);
//Number() method converts anything into a number which given as arguments
//If given argument is sentence it will return a NAN
exampleNumber = Number(exampleNumber);
str = Number(str);
console.log(typeof exampleNumber);
console.log(str);
console.log(typeof str);

*/

let a = 1 ; 
console.log(`The Post decremenet of a is ${a++}`);
alert(" \t \n" - 2);
console.log(`The Pre decremenet of a is ${++a}`);
let x = 1 + (a *= 2);
alert(x);