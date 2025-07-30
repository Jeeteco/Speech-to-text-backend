const dotenv=require('dotenv');
dotenv.config();


const express=require('express');

const connectDB=require('./config/db');

const audioRoutes =require('./routes/audioRoutes')

const transcribeRoute=require('./routes/transcribeRoute')

const path=require('path') 

const cors= require('cors');



const app = express();


//Connect Database
connectDB();

//Middelware
app.use(cors({
  origin: ['https://speech-to-text-y2k1-qa59kjiyq-jeetecos-projects.vercel.app', 'http://localhost:5173'] , // Your frontend URL
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