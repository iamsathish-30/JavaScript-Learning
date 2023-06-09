const hello = () =>{
    alert("Hello World")
}
const check = () =>{
    if(document.querySelector('h4').innerHTML === "It's a WebPage"){
        document.querySelector('h4').innerHTML = "It's a normal Site";
    }else{
        document.querySelector('h4').innerHTML = "It's a WebPage";
    }
}
let counter = 0;
const count = () => {
    counter++;
    if (counter % 10 === 0){
        alert(`The count is ${counter}`);
    }else{
        document.querySelector('h4').innerHTML = counter;
    }
}

document.querySelector('button').onclick = count;