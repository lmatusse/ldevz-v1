const express=require('express')
const app=express()
const ejs = require('ejs')
const nodemailer = require('nodemailer');
/*app.get('/',function(req,res){
    res.send('LDEVZ')
})*/
app.get('/', (req, res) => {
    // envia o arquivo da página principal
    res.sendFile(__dirname + '/view/index.html')
})
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.set('view engine', 'html')
app.engine('html', ejs.renderFile)
app.use(express.static('./public'));
const transporter = nodemailer.createTransport({
    host: "ldevz-v1.herokuapp.com",
    port: 2020,
    secure: false, // true for 465, false for other ports
    auth: {
        user: "englmatusse@gmail.com",
        pass: "laila"
    },
    tls: { rejectUnauthorized: false }
  });
  const mailOptions = {
    from: 'englmatusse@gmail.com',
    to: 'lailaamosse@gmail.com',
    subject: 'E-mail enviado usando Node!',
    text: 'Bem fácil, não? ;)'
  };
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email enviado: ' + info.response);
    }
  });
const porta=process.env.PORT || 2020
/*app.listen(2001,function(){
    console.log('Sucess 2001')
})*/

// setup view engine

app.listen(porta);
console.log(porta)