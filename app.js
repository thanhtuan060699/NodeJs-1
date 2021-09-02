const express = require('express');
const connectDB = require('./config/db');
const bodyParser = require('body-parser')

const app = express();
app.use(express.json())


//connect Db
connectDB()

const posts =require('./routers/posts')

app.use(bodyParser.urlencoded({extended : false}))

app.use(bodyParser.json())

app.use('/posts',posts)


const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log('khoi dong app lalalalal');
})