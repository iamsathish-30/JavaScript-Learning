import express from 'express';

import { createUser } from '../controller/users.js';
import { getUser } from '../controller/users.js';
import { getUsers } from '../controller/users.js';
import { deleteUser } from '../controller/users.js';
import { modifyUser } from '../controller/users.js';
import { updateUser } from '../controller/users.js';
const router = express.Router();

//All routes are start with /users
//TO get all users 
router.get('/', getUsers);

//To add users 
router.post('/',createUser);

//To get user of particular ID
router.get('/:id',getUser);

//To delete a user with particular ID
router.delete('/:id',deleteUser);

//To modify a user With particular ID
router.patch('/:id',modifyUser);

//To update the whole user identity with ID
router.put('/:id',updateUser);

export default router;