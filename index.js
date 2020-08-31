const express = require('express')
const app = express()
const port = 3337


app.get('/',(req,res)=>{
    res.json({msg:'hello world!'})
})

app.listen(port,()=>{
    console.log(`Server started at http://localhost:${port}`);
})


