let firebase=require("firebase")
var nodemailer = require('nodemailer');
//firebase config
    var config = {
        apiKey: "AIzaSyCNDCIRa0D2aYdMLbv7b5K7VqohlcOOm7I",
        authDomain: "crud-b4de3.firebaseapp.com",
        databaseURL: "https://crud-b4de3.firebaseio.com",
        projectId: "crud-b4de3",
        storageBucket: "crud-b4de3.appspot.com",
        messagingSenderId: "161721117806"
    };
    firebase.initializeApp(config);
   // var mailList=["vinod.looser00@gmail.com","thilakal9299@gmail.com","sriraamwatto33@gmail.com"]
   //smtp server setup
  var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    service: 'gmail',
    auth: {
      user: 'vinod.looser00@gmail.com',
      pass: 'vinoth1080'
    }
  });
var iteration=1;
  var ref = firebase.database().ref("request/");
  ref.on("value", function(snapshot) {
    //  console.log(snapshot.val())
      var data=snapshot.val()
      for (key in data)
      console.log(data[key])
    var mailOptions = {
        from: 'vinod.looser00@gmail.com',
        to: 'thilakal9299@gmail.com ,vinod.aadvik@gmail.com,sriraamwatto33@gmail.com,vinod.looser00@gmail.com',
        subject: 'new request',
        text:"name:"+snapshot.val().name+" \nphone no:"+snapshot.val().phone+" \n department :"+snapshot.val().department+" \nemail:"+snapshot.val().mail
      }
      
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
          iteration=iteration+1;
        }
      });
    
 }, function (error) {
    console.log("Error: " + error.code);
 });
 //crypers