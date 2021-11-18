const express=require('express')
const app=express()
/*app.get('/',function(req,res){
    res.send('LDEVZ')
})*/
app.get('/', (req, res) => {
    // envia o arquivo da página principal
    res.sendFile(__dirname + '/view/index.html')
})
app.use(express.static('./public'));
const porta=process.env.PORT || 2021
/*app.listen(2001,function(){
    console.log('Sucess 2001')
})*/
app.listen(porta);
console.log(porta)