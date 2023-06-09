let submit = document.getElementById("sub");
submit.addEventListener('click', ()=>{
    let a = document.getElementById("aText").value;
    let b = document.getElementById("bText").value;
    let c = Math.sqrt(Math.pow(a,2)+Math.pow(b,2));
    document.getElementById("valueToPrint").innerHTML = `The Hypothesis of A and B is ${c}`;
});

