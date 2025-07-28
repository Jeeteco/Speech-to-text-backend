const mongoose =require('mongoose');

// const AudioSchema = new mongoose.Schema({
//     originalName:{
//         type: String,
//         required: true
//     },
//     storedFileName:{
//         type: String,
//         required: true
//     },
//     path:{
//         type:String,
//         required:true
//     },
//     mimetype:{
//         type:String,
//         required:true
//     },
//     fileSize:{
//         type: Number,
//         required: true
//     },
//    uploadedAt:{
//         type: Date,
//         required: true
//     }
// });
const audioSchema = new mongoose.Schema({
  filename: String,
  // originalname:String,
  path: String,
  mimetype: String,
  // transcription: String,
  uploadedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports =mongoose.model('Audio',audioSchema);