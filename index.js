const express = require("express");
const app = express();

const port=process.env.PORT || 3000;

app.get("/",(req,res)=>{
    res.send("<h1>Hey fools<h1>")
})
app.listen(port, ()=>{
    console.log(`🛡️ Server started at port ${port} 🛡️`)
})
