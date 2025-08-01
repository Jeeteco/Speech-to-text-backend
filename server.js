const dotenv=require('dotenv');
dotenv.config();


const express=require('express');
const cors= require('cors');

const connectDB=require('./config/db');

const audioRoutes =require('./routes/audioRoutes')

const transcribeRoute=require('./routes/transcribeRoute')

const path=require('path') 





const app = express();


//Connect Database
connectDB();

//Middelware
app.use(cors({
  origin: [
    'http://localhost:5173', 
    'https://speech-to-text-navy.vercel.app'
  ],
  methods: ['GET', 'POST'],
  credentials: true
}));
app.use(express.json());

app.use('/uploads', express.static(path.join(__dirname, "uploads")));
app.use('/api/audio', audioRoutes);
app.use('/api/audio', transcribeRoute);



//start server
const PORT =process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server is running on http:// localhost ${PORT}`));