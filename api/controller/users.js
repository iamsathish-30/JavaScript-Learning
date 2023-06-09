import { v4 as uuidv4 } from 'uuid';

let users = [];


export const createUser = (req,res)=>{
    const user = req.body;
    users.push({ ...user , id : uuidv4() });
    console.log(`The user Added is ${user.firstName} and age is ${user.age}`);
    res.send("Post route send");
};

export const getUser = (req,res)=>{
    const { id } = req.params;
    const userFound = users.find((user)=>
        user.id === id
    );
    res.send(userFound)
};

export const getUsers = (req,res)=>{
    res.send(users);
};

export const deleteUser = (req,res)=>{
    const { id } = req.params;
    users = users.filter((user)=> user.id!==id);
    console.log(users);
    res.send(users);
};

export const  modifyUser = (req,res)=>{
    const { id } = req.params;
    const user = users.find((user)=> user.id===id);
    const { firstName , lastName , age } =  req.body;
    if(firstName) user.firstName = firstName;
    if(lastName) user.lastName = lastName;
    if(age) user.age = age;
    res.send(`Updated the user Detail with id ${id}`);
};

export const updateUser = (req,res)=>{
    const { id } = req.params;
    let user = users.find((user)=> user.id===id);
    let reqUser =  req.body;
    user.firstName = reqUser.firstName;
    user.lastName = reqUser.lastName;
    user.age = reqUser.age;
    console.log("Put method is Working fine");
    res.send(`Updated the user Detail with id ${id}`);
};