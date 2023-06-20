const { json } = require('body-parser');
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

const getBlogController=async(req,res)=>{
  console.log(req.query)

  const category=req.query.category
  console.log(category)
  if(category!=undefined){
    const categoryData=await Blogs.find({categories:category})
    // console.log(categoryData)
    if(categoryData){
      res.status(200).json({
        categoryData:categoryData
      })
    }
    else{
      res.status(404).json({
        msg:'Data not available'
      })
    }
   
  }
  else{
  try {
const allCategoryData=await Blogs.find();
// console.log(allCategoryData)
if(allCategoryData){
  res.status(200).json({
    allCategoryData:allCategoryData
  })
}

else{
  res.status(404).json({
    msg:'Data not available'
  })
}
    
  } catch (error) {
    console.log(error)
    
  }
  }

}



module.exports={blogController,getBlogController};
    
