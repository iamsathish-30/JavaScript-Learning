let setText  = document.getElementById("setText");
let resetText = document.getElementById("resetText");
let storyToWrite = document.getElementById("story");
setText.onclick = function(){
    storyToWrite.textContent = "Karthi loves TK";
};
resetText.onclick = function(){
    storyToWrite.textContent="";
};