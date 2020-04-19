var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var config  = require('../config');
var transporter = nodemailer.createTransport(config.mailer);
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',{title: 'shareTheCode - Share Your Code'});
});

router.get('/about', function(req,res,next) {
  res.render('about',{title: 'shareTheCode - Share Your Code'});
});

router.route('/contact')
  .get(function(req,res,next) {
    res.render('contact',{title: 'shareTheCode - Share Your Code'});
  })
  .post(function(req,res,next) {
    req.checkBody('name','Empty Name').notEmpty();
    req.checkBody('email','Invalid Email').isEmail();
    req.checkBody('message','Empty Message').notEmpty();
    var errors = req.validationErrors();
    if(errors) {
      res.render('contact' , {
        title: 'shareTheCode - Share Your Code',
        name: req.body.name,
        email: req.body.email,
        message: req.body.message,
        errorMessages: errors
      });
    }
    else {
      var mailOptions = {
        from: 'sharTheCode <no-reply@shareTheCode.com>',
        to: 'bpritam619@gmail.com',
        subject: 'You got a new message from ' +'from '+req.body.name + ' using mail address '+req.body.email,
        text: req.body.message
      };

      transporter.sendMail(mailOptions, function(errors,info) {
        if(errors) {
          
          return console.log(errors+"Hi");
        }
        res.render('thank',{title: 'shareTheCode - Share Your Code'});
      });
      
    }
      
  });

  

module.exports = router;
