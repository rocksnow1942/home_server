const express = require('express')
const cors = require('cors')
const axios = require('axios')
const app = express()

app.use(cors({
   origin:'*' 
}))

const port = 3337




app.get('/',(req,res)=>{
    res.json({data:`hello , this is hui's home api server!`})
})



// capture un handled routes
app.use((req,res,next)=>{
    res.status(404).json({error:`End point: ${req.url} is not found.`})
})

app.listen(port,()=>{
    console.log(`Server started at http://localhost:${port}`);
})


