require('dotenv').config()
const express  = require('express')
const app = express();

const port = process.env.PORT;
app.get('/', (req,res)=>{
    res.send("hello worlds")
})

app.get('/login', (req,res)=>{
    res.send("<h1>I'm Learnig the node</h1>")
})


app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`);
})