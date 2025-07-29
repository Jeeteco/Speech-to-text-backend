const fs = require('fs');
const axios = require('axios');

const FormData = require('form-data');

const Audio = require('../models/Audio');

const uploadAudio = async (req, res) => {
    try {
        const audio = new Audio({
            filename: req.file.filename,
          
            path: req.file.path,
            mimetype:req.file.mimetype
        });

        await audio.save();

        res.status(201).json({ message: 'Audio Uploaded', audioId: audio._id ,audioPath: audio.path})
        console.log(audio.path);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }

};

const getAllAudios = async (req, res) => {
    try {
        const audios = await Audio.find();
        res.status(200).json(audios);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }

};



module.exports = {
    uploadAudio,
    getAllAudios,
 
};