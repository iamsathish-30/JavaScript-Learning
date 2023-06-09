

import {Player , TennisPlayer} from "./class.js";
 //--> The below code is for Object literal 

 /*
const addPerson = (name , age , city) => {
    const person = {
        name,
        age,
        city
    }
    return person;
}

const personOne = addPerson("Sathish" , 19 , "Coimbatore");

const {name , age} = personOne;

console.log(`The name of the person is ${name} and age is ${age}`)
*/

let dhoni = new Player('Dhoni' , 'CSK');
console.log(dhoni.playerdata);

let raphael = new TennisPlayer("raphael" , "Argentina" , 34);
console.log(raphael.playerdata);

const add = (param1 , ) =>{
    const example = {
        name:"sathish",
    }
    console.log(example);
}

add(4);
