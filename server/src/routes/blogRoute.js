const {blogPostController,getBlogController,getByIDBlogController,updateBlogController}=require('../controllers/blogController');
const router = require('express').Router();
const upload=require('../middlewares/uploadMiddleware')

router.post('/blogs', upload.single('avatar'),blogPostController);
router.get('/blogs',getBlogController); 
router.get('/blogs/:id',getByIDBlogController)
router.put('/blogs/:id',updateBlogController)
module.exports=router

