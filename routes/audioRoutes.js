const express =require('express');
const router=express.Router();
const upload=require('../middelware/upload');
const {
    uploadAudio,
    getAllAudios,
   
} =require('../controllers/audioController');



router.post('/upload' ,upload.single('audio'),uploadAudio);

// router.get("/j", async(req,res)=>{
//  return res.status(200).json({message:"We are here"});
// });

router.get('/audios',getAllAudios);

module.exports = router;