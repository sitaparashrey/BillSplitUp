const router=require('express').Router();
const ObjectId = require("mongodb").ObjectId;
let Trip=require('../models/tripmodel');
let Detail=require('../models/detailmodel');
const passport = require('passport');
const auth1=require('./authprotect');

//for sending data of all trips on cards.js page
// router.route('/').get((req,res)=>{
//     console.log(req.params.id)
//     Trip.find({})
//     .then(trip=>res.json(trip))
//     .catch(err=>res.status(400).json('Error123: ' + err));
// });


router.route('/').get(auth1,(req,res)=>{
    let query={username:req.id};
    Trip.find(query ,(error,data) => {
        if(error)
        {
            console.log("ERROR1 " + error);
        }else{
            // console.log(data +"SEND"),
            // let d=JSON.parse(data);
            res.json(data);
        }
    })
})


router.route('/:id').get((req,res)=>{
    console.log(req.params)
    var query=req.params.id;
    Trip.find(query,(res,err)=>{console.log(res)})
    // .then(users=>{
    //     res.json(users)})
    // .catch(err=>res.status(400).json('Error: ' + err));
});

router.route('/add').post(auth1,(req,res)=>{
    console.log(req);
    const username=req.id;
    const tripname=req.body.tripname;
    const noofmember=req.body.noofmember;
    const newUser= new Trip({username,tripname,noofmember});
        //   Use same variables inside User({username,password})
    newUser.save()
    .then((response)=>
    res.json(newUser),
    console.log("Successfully Added Trip" ))
    .catch(err=> res.status(400).json('Error: ' + err));
});

router.route('/:id/details').get((req,res)=>{
    console.log(req.user)
            // let query={ username:ObjectId(req.params.is)}
    let query ={ username : req.params.id}
    Trip.find(query ,(error,data) => {
        if(error)
        {
            console.log("ERROR1 " + error);
        }else{
            // console.log(data +"SEND"),
            // let d=JSON.parse(data);
            res.json(data);
        }
    })
});

router.route('/update/details/:id').put((req,res)=>{
    let query={_id:req.params.id};
    console.log(req.body.details);
    const data=[];
    let x=0;
    let details=req.body.details;
    details.map(item=>{
        
        let amount=item.amount;
        let p=item.p;
        let name=item.name;
        const newDetail=new Detail({amount,p,name});
        
        newDetail.save()
        .then(()=>
        
        console.log( newDetail + "SUCCESS "),
        )
        .catch(err=>
            console.log(err)
        );
            console.log(x);
            data.push(newDetail);
            console.log(data)
            // Trip.findByIdAndUpdate(query,{details:newDetail},(error,data)=>{
            //     if(error)
            //     {
            //         console.log("ERROR "+ error);
            //     }else
            //     {
            //         res.json(data);
            //     }
            // }),
        // console.log(data);
    });
    // Trip.findByIdAndUpdate(query,{details:data},(error,data)=>{
        //         if(error)
        //         {
        //             console.log("ERROR "+ error);
        //         }else
        //         {
        //             res.json(data);
        //         }
        //     })
    
});



module.exports=router;
