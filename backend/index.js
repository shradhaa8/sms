const express = require('express')
const app = express()
const port = 5000
const dbConnect = require('./db')

dbConnect()


app.use('/api/auth',require('./routes/Auth'))
app.listen(port, ()=>{
    console.log(`server on https://localhost:${port}`);
    
})