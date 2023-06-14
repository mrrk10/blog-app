const Users=require('../models/userModel')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const registerController=async(req, res) => {
    try {
         const data= await Users.findOne({email:req.body.email})
        
         if(data){
          res.json({
            msg:'User  already exist',
            success:false
          })
  
         }
         else{
          // console.log(req.body.password)
  
          const hash=await bcrypt.hash(req.body.password, saltRounds,0)
          if(hash){
  
            req.body.password=hash
  
            const regsiterData= await Users.create(req.body)
                if(regsiterData){
                    res.json({
                      msg:'Registered successfully',
                      success:true,
                    })
                  }
                  else{
                    res.json({
                      msg:'Registered failed',
                      success:false
                    })
                  }
          }
          
  
         }
  
    
      
    } catch (error) {
      console.log(error)
      
    }   
   
    
   
  }

  module.exports=registerController