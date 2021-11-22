const express=require('express')
const app=express()
const ejs = require('ejs')
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/view/index.html')
})
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.set('view engine', 'html')
app.engine('html', ejs.renderFile)
app.use(express.static('./public'));

const porta=process.env.PORT || 2020
/*app.listen(2001,function(){
    console.log('Sucess 2001')
})*/

// setup view engine

app.listen(porta);
console.log(porta)