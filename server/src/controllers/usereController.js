const Users=require('../models/userModel')

const userDetailController=async(req,res)=>{
    const userData=await Users.find()
    if(userData){
        res.json({
            userData:userData
        })
    }
    else{
        res.json({
            msg:'user not found'


        }

        )
    }
}

const UserController=async (req, res) => {
//    console.log(req.params)
    try {
        const userData=await Users.findById(req.params.id)
        if(userData){
            res.json({
                userData:userData
            })
        }
        else{
            res.json({
                msg:'user not found'
            })
        }

        
    } catch (error) {
        res.status(500).json(error)
        
    }
}

module.exports={UserController,userDetailController}