const mongoose =require('mongoose');


const audioSchema = new mongoose.Schema({
  filename: String,
 
  path: String,
  mimetype: String,

  uploadedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports =mongoose.model('Audio',audioSchema);