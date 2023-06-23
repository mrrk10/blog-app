const Blogs=require('../models/blog');
var ObjectId = require('mongodb').ObjectID;
const blogPostController=async(req, res)=>{
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
  // console.log(req.query)

  const category=req.query.category
  // console.log(category)
  if(category){
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

const getByIDBlogController=async(req,res)=>{
  console.log('req.params.id value',req.params.id)
  // const objectId =  objectId(req.params.id);

  try {
  
   
      const data=await Blogs.findById(req.params.id)
      console.log(data)
      if(data){
        res.status(200).json({
          dataById:data
        })
      }
      else{
        res.status(404).json({
          msg:'data not found'
        })
      }
  } catch (error) {
    console.log(error)
  }
}

const updateBlogController=async(req,res)=>{
  try {
      // console.log(req.params)
      // console.log(req.body)
    const updatedData=await Blogs.findByIdAndUpdate(req.params.id,{$set:req.body})
    if(updatedData){
      res.json({
        msg:'updated successfully'

      })
      }
      else{
        res.json({
          msg:'somthing went wrong'
        })
      }
      
    
    
  } catch (error) {
    console.log(error)
  }
}



module.exports={blogPostController,getBlogController,getByIDBlogController,updateBlogController};
    
