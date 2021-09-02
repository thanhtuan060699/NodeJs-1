const express = require('express')
const router = express.Router();
const mongoose = require('mongoose')

const Post = require('../models/Post')

router.get('/', (req, res)=>{
    console.log('ádsadasdkajlkdjask')
    res.send('Day la')
})

router.post('/post', (req,res)=>{
    console.log('vo day ')
    const newPost = new Post({name:'Tuan',size:'asdasd'})
    newPost.save((err,sc)=>{
        console.log(sc)
    })
})

module.exports = router