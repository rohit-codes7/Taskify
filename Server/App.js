const express = require ("express")
const app = express()
require("dotenv").config()
require("./Connection/Conn")


app.get("/", (req,res)=>{
    res.send("Hello from backend")
})
app.listen(`${process.env.PORT}`, () => {
    console.log("Server is running on port 1000")
})


