const multer=require('multer');
const path=require('path')
//Storage config
const  storage =multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, 'uploads/');  //save the uploads file dir
    },
    filename: (req ,file ,cb)=>{
        cb(null, Date.now() +path.extname(file.originalname)); //file name with timestamp
    }
});

module.exports =multer({storage:storage});