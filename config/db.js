const mongoose =require('mongoose');

const connectDB =async()=>{
    try{
        await mongoose.connect(process.env.DB_CONNECT);
        console.log("MongoDB Conneted Sucessfully");
    }catch (err){
        console.error(err.message);
        process.exit(1);
    }
};

module.exports =connectDB;