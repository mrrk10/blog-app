const {blogController,getBlogController}=require('../controllers/blogController');
const router = require('express').Router();
const upload=require('../middlewares/uploadMiddleware')

router.post('/blogs', upload.single('avatar'),blogController);
router.get('/blogs',getBlogController); 
module.exports=router

