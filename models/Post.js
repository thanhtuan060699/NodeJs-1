const mongoose = require('mongoose')

const postSchema = new mongoose.Schema(
  { 
    name: 'string',
    size: 'string' 
  }
);
module.exports = mongoose.model('Post', postSchema);