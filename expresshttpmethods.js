const express = require ('express')
const app=express()

//app.get
app.get('/',(req,res)=>{
    console.log('link found')
    res.status(200).send('Home Page')
})
//app.post
//app.put
//app.delete
//app.all
app.all('*',(req,res)=>{
    console.log('404 not found')
    res.status(404).send(`<h1>Resource Not Found</h1>`)
})
//app.use
//app.listen
app.listen(5000,()=>{
    console.log(`server is listening on port 5000`)
})