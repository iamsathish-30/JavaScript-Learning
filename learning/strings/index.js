/*
Escaping characters '\' are given after the backslash
console.log('I\'m Sathish');
console.log("I'm Sathish");
*/
//Note that \n is a single “special” character, so the length is indeed 3
//console.log('my\n'.length);

/*
Accessing characters

let str = 'Hello';
console.log(str[0]);
console.log(str.at(0));
console.log(str.at(-2));
for(let char of str){
    console.log(char);
}

*/

//String are immutable so it's is impossible to change a character
/*
--> The string can be reassigned to a new String
let str = 'Sathish';
str = 's'+str.slice(1,str.length);
console.log(str);

*/
/*
--> Used to convert to upper and lower case
console.log(`The lowercase of given string is ${'Interface'.toLowerCase()}`);
console.log(`The Uppercase of given string is ${'Interface'.toUpperCase()}`);
*/

/*

if substring present in the string , it will return it's index else it will return the -1

let str = "Widget with id";
console.log(`The Position of Widget is ${str.indexOf('Widget')+1}`);
*/

/*
let str = "As sly as a fox, as strong as an ox";
let val = 'as';
let position = -1;
while((position = str.indexOf(val,position+1))!=-1){
    console.log(position)
}
*/
/*

In String there also some more properties they are includes(substring , position) ,
startWith(substring) , endsWith(substring) their return value is boolean

*/

//substr is used same as slice but the second argument is the length

//The Below codePointAt(0) method will return the ASCII value of the given character
console.log('s'.codePointAt(0));

//To convert a ascii value to a character we use
console.log(String.fromCodePoint(65));
