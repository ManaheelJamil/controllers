const express = require("express")
const app = express()
const mongoose = require('mongoose')
// const router = require("./router/auth-router")
// app.use(express.json())
// app.use("/api/auth",router)
mongoose.connect("mongodb://localhost:27017")
const User = require("./usermodule")
async function insert(){
    await User.create({
        name:"manaheel24",
        email:"anaheel20@gmal.com"
    })
}
insert()
const PORT = 5000
app.listen(PORT,()=>{
    console.log(`server is running : ${PORT}`)
})