const mongoose = require('mongoose');


const blogSchema = new mongoose.Schema({
    title:{
      type:String,
      required:true
    } ,
    description: {
      type:String,
      required:true,
    },
    username:{
      type:String,
      required:true
    },
    pic:{
      type:String,
    },
    categories:{
        type:String,
        required:true

    },
    createdDate: {
      type: Date
  }
    
  
  
 
});
  
  const Blogs = mongoose.model('Blogs', blogSchema);

  module.exports=Blogs
  