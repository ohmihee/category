const express = require('express')
const bodyParser = require('body-parser')
const nunjucks = require('nunjucks')
const app = express()
require('dotenv').config('./env')
/*
 const path = require('path')
 require('dotenv').config({path:path.join(__dirname,'.env')})
// require('dotenv').config('./env')에서 오류 발생시 아래와 같은 코드 이용
*/
const port = process.env.PORT||3012
const cookieParser = require('cookie-parser')

app.set('view engine','html')

app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static('public'))
app.use(cookieParser())

nunjucks.configure('views',{express:app})


app.listen(port,()=>{
    console.log(`server start port ${port}`)
})