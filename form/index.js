

const submit = () =>{
    const value = document.querySelector("#name").value;
    console.log(value);
    alert(`Welcome ${value}`);
}

document.querySelector("form").onsubmit = submit;