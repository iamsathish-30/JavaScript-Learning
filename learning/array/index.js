//let fruitsNames = ['Lemon' , 'Mango' , 'Apple' , 'Guava',];
/*
--> Normal array iteration
for(var i = 0 ; i < fruitsNames.length ; i++){
    console.log(fruitsNames.at(i));
}
*/

/*
--> The below code will traverse the array by single single element
for(fruit of fruitsNames){
    console.log(fruit);
}
*/

/* 
--> The below code will traverse the array with help of index
for(let index in fruitsNames){
    console.log(index);
    console.log(fruitsNames[index]);
}
*/

/*
    push() method is used to push element at the last of the array
    pop() method is used to pop element the last which means it removes from the end

console.log(`The Poped array element is ${fruitsNames.pop()}`);
fruitsNames.push('PineApple');
console.log(`The last Pushed element into the array is ${fruitsNames.at(-1)}`);

    shift() method is used to remove the first element from the array 
    unshift() method is used to add element at the first of the array 

console.log(`The Element get Shifted using shift() method is ${fruitsNames.shift()}`);
*/

// We can Truncate the array by reducing the length of the array.length ,  where it will reduce the size and make the the array elements as undefined
/*

//Another syntax to create a Array
let fruits = new Array(2);
//The argument for Array() is for defining the length of the array
console.log(fruits.length);
*/

/* Exercise
--> 1.

let styles = ['Jezz' , 'blues'];
console.log(`The Styles list is ${styles}`);
styles.push('Rock-n-Roll');
console.log(`The Styles list is ${styles}`);
let mid = Math.floor(styles.length / 2);
console.log(`The Mid index of the styles array is ${mid}`);
styles[mid] = 'Classics';
console.log(`The Styles list is ${styles}`);
styles.shift();
console.log(`The Styles list is ${styles}`);
styles.unshift('Rap','Reggae');
console.log(`The Styles list is ${styles}`);

let arr = ['a','b'];
arr.push(()=>{
    console.log(this);
})
arr[2]();
*/
//--> 2.
const sumNumber = (arr) =>{
    let sum = 0;
    for(let e of arr){
        sum +=e;
    }
    return sum;
}
let array = [];
let n = prompt("Enter the number of Array Elements : ");
for(var i = 0 ; i < n ; i++){
    var val = Number(prompt("Enter number :"));
    if(val >= 0 && val <= Number.MAX_SAFE_INTEGER){
        array.push(val)
        console.log(array);
    }
    else{
        break
    }
}
let s = sumNumber(array);
console.log(s);


