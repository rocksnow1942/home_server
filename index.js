const express = require('express')
const app = express()
const port = 3337


app.get('/',(req,res)=>{
    res.json({data:'hello world!'})
})

app.get('/echo/:text',(req,res)=>{
    res.json({data:req.url})
})


app.listen(port,()=>{
    console.log(`Server started at http://localhost:${port}`);
})


