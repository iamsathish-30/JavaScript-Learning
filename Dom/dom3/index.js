let content = document.getElementById("file");
let bt1 = document.getElementById("buttonOne");

bt1.addEventListener('click',love);

function love(){
    setTimeout(()=>{
        content.innerHTML = "I love you"
    },3000)
}