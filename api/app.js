import express from 'express';
import bodyParser from 'body-parser';
import usersRouter from './routes/users.js';
import profilesRouter from './routes/profiles.js';

const app = express();
const PORT = 3500;

app.use(bodyParser.json());

app.use('/users',usersRouter);

app.use('/profiles',profilesRouter );

app.get('/',(req,res)=>{
    res.send("Hello From HomePage");
});

app.listen(PORT , ()=>{
    console.log(`The Server is Running on port ${PORT}`);
})