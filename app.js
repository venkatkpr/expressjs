const express = require('express')
const app = express()

app.listen(3000,(req,res)=>{
console.log("server is running on the port 3000")
})
app.get("/",(req,res)=>{
    res.send("Hii"),
    console.log("/Get Pi");
})