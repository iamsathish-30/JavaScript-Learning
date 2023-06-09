//Promises
/*
const buyFLightTicket = () =>{
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            const err = false;
            if(err){
                rej("Sorry your payment was not successful");
            }else{
                res("Thank you , your payment was successful")
            }
        },3000);
    })
}

buyFLightTicket()
//.then will be called when buyFLightTicket get resolve method
.then((msg)=>{
    console.log(msg);
})
//else it goes to catch method 
.catch((err)=>{
    console.log(err);
})

*/
let userNames = ["sonia","rowdy","viper","saran","Sathish"];

const userData = () =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const user = {
                name : "Sathish",
                age : 19,
                city : 'Coimbatore'
            }
            if(userNames.includes(user.name)){
                resolve(user);
            }else{
                reject("User not found");
            }
        },3000);
    });
};

userData()
.then((userData)=>{
    console.log(userData);
})
.catch((err)=>{
    console.log(err);
})