const express = require('express')
const nunjucks = require('nunjucks')
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.urlencoded({extended:false}))

app.set('view engine','html');
nunjucks.configure('views',{express:app})

app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/login',(req,res)=>{
    let {userid,userpw} = req.query
    console.log(userid,userpw)
    res.send('get okay',userid,userpw)
})

app.post('/login',(req,res)=>{
    let {userid,userpw} = req.query
    console.log(userid,userpw)
    res.send('post okay',userid,userpw)
})

app.listen(3001,()=>{
    console.log('server start 3000');
})