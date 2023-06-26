const {blogPostController,getBlogController,getByIDBlogController,updateBlogController,deleteByIdBlogController}=require('../controllers/blogController');
const router = require('express').Router();
const upload=require('../middlewares/uploadMiddleware')

router.post('/blogs', upload.single('avatar'),blogPostController);
router.get('/blogs',getBlogController); 
router.get('/blogs/:id',getByIDBlogController)
router.put('/blogs/:id',upload.single('avatar'),updateBlogController)
router.delete('/blogs/:id',deleteByIdBlogController)
module.exports=router

