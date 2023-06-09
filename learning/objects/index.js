/*
const person = {
    name:["Sathish","Rowdy"],
    age:19,
    bio:function(){
        console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old` );
    },
    introduction : function(){
        console.log(`Hi , I'm ${this.name[0]}`);
    },
};
console.log(`The persons age is ${person.age}`);
person.bio();

*/

// const person = {
//     name : {
//         first:"sathish",
//         last:"s",
//     }
// }

// person.name.first = "rowdy";
// console.log(person.name.first);
/*
--> Using a function to display the properties
const person =  {
    name:"sathish",
    age:32,
};

const logProperty = (property)=>{
    console.log(person[property])
}

logProperty("name");
*/

function PersonObject(name){
    this.name = name;
    this.val = ()=>{
        console.log(`The name of the person is ${this.name}`);
    }
}

const p1 = new PersonObject("sathish");
console.log(p1.name);
p1.val();

const p2 = new PersonObject("Curl");
p2.val();

const myNotification = new Notification("Hello!");
