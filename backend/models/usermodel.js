const mongoose=require('mongoose');
const Schema1=mongoose.Schema;
const crypto=require('crypto');
const bcrypt=require('bcrypt');

const Userschema=new Schema1({
    username:{
        type:String,
        required:true,
        unique:false,
        minlength:3,
        trim:true
    },
    email:{
        unique:true,
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
        minlength:7
    },
    confirmPassword:{
        type:String
    },
    resetToken:{
        type:String
    }
}
// },{
//     timestamps:true,
// }
);

Userschema.methods.createResetToken=function(){
    //creating unique token using npm i crypto
    const resetToken1=crypto.randomBytes(32).toString("hex");
    this.resetToken=resetToken1;
    return resetToken1;
}

Userschema.methods.resetPasswordHandler= function(password,confirmPassword){
   
    this.password=password;
    this.confirmPassword=confirmPassword;
    this.resetToken=undefined;
}
const User=mongoose.model('User',Userschema);

module.exports =User;

