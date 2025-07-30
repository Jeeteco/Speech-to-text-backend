const express =require('express');
const router=express.Router();
const upload=require('../middelware/upload');
const {
    uploadAudio,
    getAllAudios,
   
} =require('../controllers/audioController');



router.post('/upload' ,upload.single('audio'),uploadAudio);


router.get('/audios',getAllAudios);

module.exports = router;