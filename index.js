const express=require('express')
const app=express()
const ejs = require('ejs')
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/view/index.html')
})
app.get('/services', (req, res) => {
    res.sendFile(__dirname + '/view/services.html')
})
app.get('/treinamento', (req, res) => {
    res.sendFile(__dirname + '/view/treinamento.html')
})
app.get('/projects', (req, res) => {
    res.sendFile(__dirname + '/view/projects.html')
})
app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/view/contact.html')
})
app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/view/about.html')
})
app.get('/forum', (req, res) => {
    res.sendFile(__dirname + '/view/forum.html')
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