const mongoose = require("mongoose")

const config = require('config')
const db = config.get('mongoURI')
console.log(db)
const connectDB = async ()=>{
    try {
        await mongoose.connect(db ,{
          
        })
        console.log('chay xong db')
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}
module.exports = connectDB