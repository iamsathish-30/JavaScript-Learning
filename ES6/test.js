
/*
--> It's for array

  let contacts = ["saran","hari","viper"];
  //The below lines uses a Spread Operator, Where it will copy the contacts array to the new Array
  let personalContacts = ["Mudhevi","Jaya",...contacts];

  contacts.push("mudhevi");
  
  console.log(personalContacts);

  */
 /*
 
 --> It's for Ojects

  let person = {
    name:"sathish",
    age:19,
    city:"Coimabatore"
 }

 let employee = {
    ...person,
    experience:"0-Years"
 }

 person.name = "Rowdy";
 console.log(employee);

 */

 // --> Arraw Function(Synatx)

//If we have two parameter we need to include paranthesis
/*
 const dinnerMenu = (food = "something",drink) => `There is a buffet system for dinner ,It consists of many dishes like ${food} and ${drink}`;

 console.log(dinnerMenu(undefined,"JD"));
 */

export const app = ["BGMI","Insta","What's App"];
