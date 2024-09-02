import express from "express"

const app = express()

app.listen(8800, ()=>{
    console.log("Connected to the backend!")
})

app.get("/", (req,res)=>{
    res.json("This is the backend!")
})