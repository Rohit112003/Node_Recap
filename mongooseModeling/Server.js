import expres from 'express';

const app = expres();

const port = 3000;
app.get('/', (req,res)=>{
    res.send("<h1>Hello from the server SIde</h1>")
})

app.listen(port, ()=>{
    console.log(`server is listening on port ${port}`)
})