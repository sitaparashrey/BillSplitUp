const express=require('express');
const cors = require('cors');
const mongoose=require('mongoose');
const session=require('express-session');
const MongoStore = require("connect-mongo");
const flash=require('express-flash');
const MongoDBStore = require('connect-mongodb-session')(session);
const cookieSession = require('cookie-session');
const cookieParser=require('cookie-parser');
const path=require('path');


//to process and use environment variable in process.env
require('dotenv').config();
const app=express();
const port=process.env.PORT || 3000;

app.use(cors({credentials: true, origin: true})); 

//to encode/parse json objects in url
app.use(express.json());
app.use(cookieParser());
app.use(cookieSession({
    maxAge:24*60*60*1000,
    keys:['uinqwsedcftgh']
}));
 
// connecting to mongodb - uri
const uri=process.env.ATLAS_URI;
mongoose.connect(uri );
const connection=mongoose.connection;
connection.once('open',()=>
{
    console.log("Success");
})

const tripRouter=require('./routes/triproute');
// const userRouter=require('./routes/userroute');
const detailRouter=require('./routes/detailroute');
const authRouter=require('./routes/auth');
app.use(express.static(path.join(__dirname, 'public')));

//to pass normal values - then values can be accessed in req.body
// app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(flash())

// imported all routes here 
app.use('/trip',tripRouter);
// app.use('/user',userRouter);
app.use('/detail',detailRouter);
app.use('/auth',authRouter);

//running on given port
app.listen(port,()=>
{
   console.log('Server running at port: ' + port);
});
