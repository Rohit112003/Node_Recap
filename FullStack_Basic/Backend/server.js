import 'dotenv/config'
import cors from 'cors'
import express from 'express'

const app = express();

const port = process.env.PORT;
// app.get('/', (req,res)=>{
//     res.send("Server is Ready");
// })
app.use(cors())

app.get('/api/jokes', (req,res)=>{
    const jokes = [
        {
          id: 1,
          title: 'A first joke',
          content: "Why don't scientists trust atoms? Because they make up everything!"
        },
        {
          id: 2,
          title: 'A second joke',
          content: "Why did the scarecrow win an award? Because he was outstanding in his field!"
        },
        {
          id: 3,
          title: 'A third joke',
          content: "Why don’t skeletons fight each other? They don’t have the guts."
        },
        {
          id: 4,
          title: 'A fourth joke',
          content: "What do you call fake spaghetti? An impasta!"
        },
        {
          id: 5,
          title: 'A fifth joke',
          content: "Why did the math book look sad? Because it had too many problems."
        }
      ];
      res.send(jokes)
      
})

app.listen(port, ()=>{
    console.log(`server is listening ${port}`)
})