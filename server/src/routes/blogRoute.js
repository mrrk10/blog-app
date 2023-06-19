const blogController=require('../controllers/blogController');
const router = require('express').Router();
const upload=require('../middlewares/uploadMiddleware')

router.post('/uploads', upload.single('avatar'),blogController);
module.exports=router

