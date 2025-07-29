const express = require('express');
const fs = require('fs');
const axios = require('axios');
const path = require('path');


const Audio = require("../models/Audio");
const Transcript = require("../models/transcribeModel");
const { error } = require('console');

const router = express.Router();





router.post('/transcribe', async (req, res) => {

  // console.log("BODY RECEIVED:", req.body);

  const { audioId } = req.body;
  if (!audioId) return res.status(400).send('audio is required.');

  try {
    const audio = await Audio.findById(audioId);

    if (!audio) {
      return res.status(400).json({ error: "Audio not found" });
    }

    // if (!audio.Id) {
    //   return res.status(400).json({ error: "Audio path is misiing in the database" });
    // }

    // const audioPath = path.join(__dirname, "../", audio.path);

    // const audioData = fs.readFileSync(audioPath);

    // console.log("Audio file size:", audioData.length);
   
    // console.log('Audio document from DB:', audio);
   


    const response = await axios.post('https://api.deepgram.com/v1/listen?punctuate=true&language=en', audioData, {
      headers: {
        'Authorization': `Token ${process.env.DEEPGRAM_API_KEY}`,
        'Content-Type': audio.mimetype || 'audio/wav'
      }
    })

    const transcriptText = response.data.results?.channels?.[0]?.alternatives?.[0]?.transcript;


  

    if (!transcriptText) {
      return res.status(200).json({
        message: "Transcription complete, but no speech was detected.",
        transcript: null
      });
    }

    const transcript = new Transcript({
      audioId: audio._id,
      transcript: transcriptText,
    });


    await transcript.save();

    res.status(200).json({ message: 'transcription complete ', transcript });



  } catch (err) {
    res.status(500).json({ error: 'transcription Failed', details: err.message });
  }

});

module.exports = router;
