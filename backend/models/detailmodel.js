const mongoose=require('mongoose');
const schema=mongoose.Schema;
let Trip=require('../models/tripmodel');
const detailSchema= new schema({

    trip:{type:mongoose.Schema.Types.ObjectId,ref:'Trip'},
    amount:{type:Number,default:0},
    person:{type:Number},
    name:{type:String}
});
const detail=mongoose.model('detail',detailSchema);

module.exports=detail;