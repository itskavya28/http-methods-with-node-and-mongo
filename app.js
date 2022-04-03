const express = require('express');
const mongoose  = require('mongoose');

const app = express();

const url = 'mongodb://localhoast/AlienDBex';
mongoose.connect(url, {useNewUrlParser: true});

const con = mongoose.connection;

con.on('open', ()=>{
    console.log('connected');
})

app.use(express.json());

const alienRouter = require('./routers/aliens');
app.use('/aliens', alienRouter);

app.listen(9000, ()=>{
    console.log('server started');
})