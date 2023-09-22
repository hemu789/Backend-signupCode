// express
// mongoose
//post method : create + mongodb save

//import 

const express = require("express")
const {mongoose, Schema} = require("mongoose")
const bodyParser = require("body-parser")

const app = express();
app.use(bodyParser.json())

//schema
const userSchema = new Schema({
    name : String,
    email: String
})

// model creation
const user = mongoose.model("user" , userSchema)

// routes
app.get('/', (req, res) =>{
    res.send("Home Page")
})

app.post('/signup' , (req, res) =>{
    const {name, email} = req.body
    const newsignup = new user({name,email})

    //save in db: fixed
    newsignup.save()
    res.json(newsignup)
})

// server listen

app.listen(4000, ()=>{
    console.log("Server Started on port 4000")
})

//mongodb connection

mongoose.connect("mongodb+srv://cforcoding:admin123@cluster0.dno8sxd.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology : true
}).then( ()=>{
    console.log("DB connection successfuly")
}).catch( (e) =>{
    console.log("Error" ,e)
})