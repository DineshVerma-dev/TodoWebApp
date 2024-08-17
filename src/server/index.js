import express from 'express';
import Connection from './database/db.js';
import cors from 'cors'
import route from './routes/route.js';
import bodyParser from 'body-parser';

const app =  express();

const PORT = process.env.PORT || 8000 ;

Connection();



const allowedOrigins = ['http://localhost:5173', 'https://todowebapp-livid.vercel.app'];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));

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


