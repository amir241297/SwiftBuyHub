require('dotenv').config({path:'./configs/.env'})
const express = require('express') 
const app = express()
const { connection }=require('./configs/db')

const { adminRoutes } = require('./Routes/adminRoutes')

app.use(express.json())
app.use("/admin", adminRoutes) 


app.get("/", (req, res) => {
    res.send("Home")
    console.log("Home")
})

app.listen(process.env.PORT, async() => {
    try{ 
        await connection
        console.log("server is connected to DB")
    }catch(err){
        console.log("Server Error: ", err)
    }
    console.log(`Server is Running Port: ${process.env.PORT}`)
})