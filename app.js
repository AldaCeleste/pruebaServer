const express = require('express');
const path = require ('path');
const app = express();


app.get('/404', (req, res) =>{
  res.send("Error página no encontrada")
})


app.get('/', (req,res)=>{
  res.sendFile(path.resolve(__dirname,'./views/index.html'));
});

const PORT = process.env.PORT || 443;

app.listen(PORT,()=>{
  console.log("Levantando un servidor con Express");
});