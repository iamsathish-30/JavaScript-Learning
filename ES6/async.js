/*

const personBookedTicket  = [];

const buyTicket = async() =>{
    let getTicket = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            personBookedTicket.push("sathish");
            resolve("Ticket Booked for sathish");
        },3000)
    })
    await getTicket
    .then((msg)=>{
        console.log(msg)
    })
}

buyTicket()

*/

const getData = async() =>{
    const apiUrl = "https://api.chucknorris.io/jokes/random";
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data.value);
}

getData();