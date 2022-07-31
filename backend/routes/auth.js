const router=require('express').Router();
const jwt=require('jsonwebtoken');
const userModel=require('../models/usermodel');
const JWT_KEY=process.env.JWT_KEY;
const bcrypt=require('bcrypt');
const sendmail=require('./nodemail');
const User=require('../models/usermodel');
const path=require('path');

//register route
router.route('/r').post(async (req,res)=>{
    
    const hashedPassword=await bcrypt.hash(req.body.password,10);
    const username=req.body.username;
    const email=req.body.email;
    const password=hashedPassword;
    const data={name:username,email:email,password:req.body.password};
    const resetToken="";
   
    User.create({username,email,password,resetToken},function(err,newuser){
        if(err)
        {
            console.log(err);
            return res.status(400).json('ERROR');
        }else
        {
            sendmail("signup",data);
            // res.json({message:'Data added'})
            res.redirect("http://localhost:3001/")     
        }
    })
    //OR Use -------------- Save()
     // const newUser= new User({username,email,password}); //Use same variables inside User({username,password})
    // newUser.save()
    // .then(()=>{
    //     console.log("Entered ")
    //     sendmail("signup",data);
        // res.redirect("http://localhost:3001/") 
        // res.json({message:'User ADDED!! '})
    // })
    // .catch(err=> res.status(400).json('Error : ' + err));
    
});

//login route
router.route('/login').post( (async (req,res)=>{
    const {email,password}=req.body;
    if(email)
    {
        let user=await userModel.findOne({email});
        if(user)
        {
            const isMatch = await bcrypt.compare(password, user.password);
            if(isMatch==true)
            {
                let uid=user['_id'];
                let token=jwt.sign({payload:uid},JWT_KEY);
                res.cookie('login',token ,{httpOnly:true});     
                res.redirect("http://localhost:3001/trip")             
                // return res.json({
                //     message:'User Logged IN',
                //     userDetails:token
                // })
            }else
            {
                // res.redirect("http://localhost:3001/")  
                return res.status(401).send("WRONG PASSWORD. Please Login Again")
            }
        }else
        {
            return res.json({
                message:'User Invalid'
            })
        }   
    }
}));

//forget password
router.route('/forgetpassword').post(async (req,res)=>{
    const {email}=req.body;
    try
    {
        const user=await userModel.findOne({email:email});
        if(user)
        {
            let resetToken=user.createResetToken();
            user.save()
            .then(()=>{
                res.json({message:"Please Try Again"})
            })
            .catch(err=>console.log(err))
            let resetlink=`${req.protocol}://${req.get('host')}/auth/resetpassword/${resetToken}`;
            //send email to the user
            let ob={
                resetPasswordlink:resetlink,
                email:email,
                name:user.username
            }
            sendmail("resetpassword",ob);
            //nodemailer
            return res.json({
                message:'Sent Successfully'
            })
        }else
        {
            return res.json({
                message:'User not found'
            });
        }
        
    }
    catch(err){
        res.status(501).json({
            message:'Failed to Forget Password',
            error
        })

    }

});

// send reset password page
router.route('/resetpassword/:token').get(async (req,res)=>{
    return res.sendFile(path.resolve('../src/Reset.html'))
    
});

//reset Password
router.route('/reset').post( async (req,res)=>{
    try{
        let {password,confirmPassword,token}=req.body
        const hashedPassword=await bcrypt.hash(password,10);
        const user=await userModel.findOne({resetToken:token});
        if(user)
        {
            user.resetPasswordHandler(hashedPassword,confirmPassword)
            user.save()
            .then(()=>{
                console.log("Saved",user)
            })
            .catch(err=>console.log("ERROR",err));
            res.json({
                message:'Reset Succesfull. Please login again'
            });
        }else
        {
            res.status(501).json({
                message:'Failed to Reset Password - User not found'
            })
        }
        
   }
   catch(err)
   {
        res.status(501).json({
            message:'Failed to Reset Password'
        })
   }

});

//logout
router.route('/logout').get(async (req,res)=>{
    //replace the cookie with empty string and delete in max-age:1ms
    console.log(req.cookies)
    res.cookie('login','',{maxAge:1});
    res.json({
        message:'USer logged out successfully'
    });
    // res.redirect("http://localhost:3001/")    
})

module.exports=router;