let Detail=require('../models/detailmodel');
const router=require('express').Router();

router.route('/add').post((req,res)=>{
    const trip=req.body.trip;
    const amount=req.body.amount;
    const name=req.body.name;
    const person=req.body.p;
    const newDetail=new Detail({trip,amount,person,name});
    newDetail.save()
    .then(()=>{
        console.log("ADDED DETAIL")
    })
    .catch(err=> res.status(400).json('Error: ' + err));
});

router.route('/').get((req,res)=>{
    let query={trip:req.body.trip}
});

module.exports =router;