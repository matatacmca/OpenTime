console.log(`${new Date().toString()} - server started`);

const express = require('express');
const app = express ();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get("/status", (req,res)=> res.sendStatus(200));