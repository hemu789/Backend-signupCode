
const express = require("express")
require('dotenv').config()
const User = require("./models/User")
const dbConnect = require("./config/db")

const app = express();
const PORT = process.env.PORT || 4000
app.use(express.json())

// routes
app.get('/', (req, res) =>{
    res.send("Home Page")
})

app.post('/register' , async(req, res) =>{
    try{
        const {name, email} = req.body
        const user = await new User({name,email})

        //save in db: fixed
        user.save()
        res.json(user)
    }

    catch(err){
        console.log(err)
    }
    
})

// server listen

app.listen(PORT, ()=>{
    console.log(`Server Started on port ${PORT}`)
})

//mongodb connection
dbConnect()