const mongoose = require('mongoose');


const connectToDb = async()=>{
    try{
      const connection = await mongoose.connect(process.env.MONGO_DB);
      if(connection){
        console.log("connnectd to mongodb".yellow.bold)
      }
    }catch(err){
      console.log(`errpr${err}`.red.bold)
    }
  }
module.exports=connectToDb