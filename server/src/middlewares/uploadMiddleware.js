const multer  = require('multer')


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '/home/jude/blog-app/client/public/uploads')
    },
    filename: function (req, file, cb) {
      // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.originalname)
      
    }
  
  })
  const multerFilter= (req, file, cb) => {
    if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
      cb(null, true);
    }
      else {
        cb(null, false);
        return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
  }
    
    } 
  
  const upload = multer({
     storage: storage,
     fileFilter:multerFilter
     }
     )

     module.exports=upload;
  
  
  