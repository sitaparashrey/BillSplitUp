const jwt=require('jsonwebtoken');
const JWT_KEY=process.env.JWT_KEY;
const userModel=require('../models/usermodel');

function protectRoute(req,res,next){
    try
    {
        if(req.cookies.login)
        {
            let payload=jwt.verify(req.cookies.login,JWT_KEY);
            const user=userModel.findById(payload.payload )
            if(payload)
            {
                req.id=payload.payload;
                next();
            }else
            {
                res.status(501).json({
                    message:"Please Log IN !!",
                });
            }
        }else
        {
            res.json({
                message:'Required to login'
            })
        }
    }
    catch
        {
            res.status(501).json({
                message:"Please Log IN !!",
            });
        }
}

module.exports=protectRoute;