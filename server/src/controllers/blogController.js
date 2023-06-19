const Blogs=require('../models/blog');


const blogController=async(req, res)=>{
    // console.log('text',req.body)
    // console.log(req.file)

    req.body.pic=req?.file?.filename
    // console.log(req.body)
    const data=await Blogs.create(req.body)
    // console.log(data)
    if(data){
      res.json({
        success:true,
        msg:'updated successfully'
      })
    }
    else{
      res.json({
        success:false,
        msg:"something went wrong "
      }
        

      )
    }
    
} 

module.exports=blogController;
    
