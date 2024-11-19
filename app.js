const express = require('express');
const app = express();
const PORT = 3000 || 8000;

app.get("/user/:id", (req, res) =>{
   const userId = req.params.id; //dot notation
   res.send(`User id is ${userId}`);
});


app.listen(PORT, ()=>{
    console.log(`Connected to port ${PORT}`);
});