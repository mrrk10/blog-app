const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Users=require('../models/userModel')
const Token=require('../models/token')

const Login=async (req, res) => {
    try {
      // console.log(req.body)
      const data = await Users.findOne({email: req.body.email})
      // console.log(data)
      // const {password,__v,...refactoredData}=data.toObject()
      // console.log('>>>>>',refactoredData)

      
      if(data){
        dbPassword=data.password

        // user credential match
        const isMatched = await bcrypt.compare(req.body.password, dbPassword)
        // const {password,__v,...refactoredData}=data.toObject()
        // console.log(refactoredData)
        // console.log(isMatched)
      if(isMatched) { 
        // console.log(req.body)
        const token = jwt.sign({ email: req.body.email}, process.env.ACCESS_SECRET_KEY,{expiresIn:'15m'}); 
        // const refresh_token=jwt.sign({ email: req.body.email}, process.env.REFRESH_SECRET_KEY);
        
        // const newToken =new Token({token:refresh_token})
        // await newToken.save();


        res.status(200).json({message: "login succcess", success:true,token:token,fullname:data.fullname,_id:data._id,email:data.email})
      }else{
        res.status(400).json({message: "login failed",success:false})
      } 
      }
      else{
        res.json({message:'login failed',success:false})
      }
     
      
    } catch (error) {
      console.log(error)
      
    }
   
   
    //do we need hash?
    // do we need new password?
    //how to knnow if pass matched?
    
  }

module.exports=Login