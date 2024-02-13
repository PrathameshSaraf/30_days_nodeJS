const express =require('express');
const path=require('path');
const app=express();

app.use(express.static(path.join(__dirname,'public')));

app.get("/styles/style.css",(req,res)=>{
    res.sendFile(path.join(__dirname, "public","style.css"));
})

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname, "public", "index.html"));
})

app.listen(3000,()=>{
   console.log("server is running on 3000 port ");
});