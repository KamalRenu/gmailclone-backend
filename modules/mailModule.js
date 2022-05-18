const nodemailer = require('nodemailer');
const Send = require('../model/Send');

exports.sender = async (req, res, next) => {
    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USERNAME,
          pass: process.env.EMAIL_PASSWORD
        }
      });
      
      const mailOptions = {
        from: 'dummydrive0122@gmail.com',
        to: req.body.email,
        subject: req.body.subject,
        text: req.body.text
      };
      
      await transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          const {email, subject, text} = req.body;
          const today = new Date();
          const time = today.toLocaleString('en-IN', { hour: 'numeric', minute: 'numeric', hour12: true })
          const send = Send.create({
            email,
            subject,
            text,
            time
          })
          res.status(200).send({success: true, data: "Email sent successfully"+info.response})
        }
      });
    } catch (error) {
      return res.status(500).send({
        success: false,
        error: "Email couldn't be sent"
      })
    }
}

exports.deletemail = async (req, res, next) => {
  try {
    let response = await Send.findByIdAndDelete(req.params.id);
    if(response){
      res.status(200).send({success: true, data: "Mail deleted successfully"})
    }
  } catch (error) {
    return res.status(500).send({
      success: false,
      error: "Mail couldn't delete"
    })
  }
}

exports.getmail = async (req, res, next) => {
  try {
    let response = await Send.find();
    if(response){
      res.send(response);
    }
  } catch (error) {
    return res.status(500).send({
      success: false,
      error: "Mail couldn't get"
    })
  }
}