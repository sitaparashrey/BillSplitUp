const mongoose=require('mongoose');
const Schema=mongoose.Schema;
let User=require('../models/usermodel');
let Detail=require('../models/detailmodel');
const tripSchema=new Schema({
    
            username:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
            tripname:{ type : String,required:true},
            total_cost:{type: Number,default:0},
            noofmember:{type:Number,default:0}
        }
    ,{
        timestamps:true,
});

const trip=mongoose.model('trip',tripSchema);
module.exports=trip;