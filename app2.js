const express=require("express");

const user= require("./users");//To get user data


const app=express();


app.get("/",(req,res)=>{
   return res.send(user);
})


app.listen(2346, function (){
    console.log("listening on port 2346");
});