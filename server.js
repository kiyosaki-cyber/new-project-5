const express = require('express')
require('dotenv').config()
const app = express()
const mongoose = require('mongoose')
const budgetRoutes = require('./routes/userRouter')
const authRoutes = require('./routes/AuthRouter')
 
//middleware  
app.use(express.json())
 
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()        
})  
//routes   
app.use('/api/user', budgetRoutes)
app.use('/api/auth', authRoutes)

//connecting to the mongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //port listening
  console.log('connected to db');
  app.listen(process.env.PORT, () =>{
    console.log(`server running on port ${process.env.PORT}`);
    })  
 
    })
    .catch((error) => {
        console.log(error)   
    })
 
