
let head = document.getElementById("header");
let submit = document.getElementById("submit");
submit.addEventListener('click' , ()=>{
    head.innerHTML= "Hi"
    //It's a CallBack function
    setTimeout(()=>{
        head.innerHTML= "Bye";
    },5000);
});

