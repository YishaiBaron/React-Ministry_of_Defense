let express=require("express");
let app=express();


app.get("/",(req,res)=>res.send("Good job"));


app.listen(3000, ()=>{console.log("Ok")})