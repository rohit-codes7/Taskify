const express = require ("express")
const app = express()
const cors = require("cors")
const cookieParser = require("cookie-parser")
require("dotenv").config()
require("./Connection/Conn")
const userApis = require("./Controllers/User")
app.use(express.json())

app.use(cors({
    origin: ["http://localhost:5173"], credintials: true
}
))

app.use(cookieParser())
app.get("/", (req,res)=>{
    res.send("Hello from backend")
})
app.use("/api/v1",userApis)
app.listen(`${process.env.PORT}`, () => {
    console.log("Server is running on port 1000")
})


