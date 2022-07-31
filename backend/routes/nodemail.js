// "use strict";
const nodemailer = require("nodemailer");
// const logo =require( "../images/Split-up");

// async..await is not allowed in global scope, must use a wrapper
 async function sendmail(str,data) {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'jhak01059@gmail.com', // generated ethereal user
      pass: "tebefvsshaoindms", // generated ethereal password
    },
  });
  var osubject,otext,ohtml;
  if(str=="signup")
  {
      osubject=`Thank You For Signing ${data.name}`;
      ohtml=`
      <div class="container" style="padding:30px;margin:20px">
      <div class="heading" style="font-family:cursive;text-align:center;font-size:22px">Hello ${data.name} !!</div>
  <h2>Welcome To Bill Split-Up👻</h2>
  <h3>Hope you are Doing Great !</h3>
  Here are your details -
      <div><h4>
          <ul style="list-style: none;">
               <li>Name - ${data.name}</li>
               <li>Email - ${data.email}</li>
               <li>Password - ${data.password} </li>
          </ul>
          </h4>
        </div>
        <h5>Disclaimer : Do not Worry we won't share or use your private data without your concern </h5>
  </div>
      `
  }
  else if(str=="resetpassword")
  {
    osubject=`Hii ${data.name}`;
    ohtml=`
    <h3>Here is your Link to Reset Your Password !</h3>
    <h4> Link :- </h4>
    ${data.resetPasswordlink}
    `
  }

  // send mail with defined transport object
  let info =  await transporter.sendMail({
    from: '"Bill-SplitUp👻" <jhak01059@gmail.com>', // sender address
    to: data.email, // list of receivers
    subject: osubject, // Subject line
     // plain text body
    html: ohtml, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

}

module.exports=sendmail;


