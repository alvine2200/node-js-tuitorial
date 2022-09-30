const express =require ('express')
const app=express()

const logger = require ('./loggermiddleware')

app.use('/api',logger)

app.get('/',(req,res)=>{
    res.status(200).send('Welcome to homepage')
})

app.get("/api/products",(req, res) => {
  res.status(200).send("Products Page...");
});

app.listen(5000,()=>{
    console.log('Server listening on port 5000....')
})