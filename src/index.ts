import express from "express";
import { User } from "./db";
import bodyParser from "body-parser";


const app = express();

app.use(express.json());

app.get("/",async(req,res) =>{
  try{
    const users = await User.find();
    res.json(users);
  } catch(error){
    res.status(500).json({
        error:"Error fetching users",
        details:error
    })
  }

});


app.post("/users", async(req,res) =>{
const {name,age,email} = req.body;

try{
    const newUser = new User({name,age,email});
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
} catch(error){
    res.status(400).json({
        error:"Error creating user",
        details:error
    })
}
})



app.listen(3000,()=>{
    console.log("Server is running on Port 3000");
});
