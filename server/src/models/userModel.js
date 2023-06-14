const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    fullname:{
      type:String,
      required:true
    } ,
    email: {
      type:String,
      required:true,
      // unique:true
    },
    password:{
      type:String,
      required:true
    },
    pic:{
      type:String,default:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Ffree-vector%2Fdefault-profile-picture&psig=AOvVaw1nrIHmfiLqRbzRtwpwhJcs&ust=1684774766326000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNi7-J_xhv8CFQAAAAAdAAAAABAJ"
    }
  },
  {
    timestamps:true


  }
  );
  
  const Users = mongoose.model('Users', userSchema);

  module.exports=Users
  