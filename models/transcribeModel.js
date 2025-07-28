const mongoose= require("mongoose");

const transcriptSchema= mongoose.Schema({
    audioId:{
        type:mongoose.Schema.Types.ObjectId , ref:'Audio'
    },
    transcript: String,
    createdAt:{
        type:Date,
        default:Date.now
    },
});


module.exports=mongoose.model('transcript', transcriptSchema);