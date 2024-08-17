import express from 'express';
import Connection from './database/db.js';
import cors from 'cors'
import route from './routes/route.js';
import bodyParser from 'body-parser';

const app =  express();

const PORT = process.env.PORT || 8000;

Connection();

app.use(cors());
app.use(bodyParser.json({ extended : true}));
app.use(bodyParser.urlencoded({ extended : true}));

app.use('/',route);


app.get("/", (req, res) => {
    console.log("Let's start the to-do application");
    res.send("Welcome to the To-Do Application!");
});

app.get("/todo", (req, res) => {
    console.log("Let's start the to-do application");
    res.send("do application");
});

app.listen(PORT,()=>{
    console.log(`your server is running on ${PORT}`);
});


