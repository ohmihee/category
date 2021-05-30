const express = require('express')
const bodyParser = require('body-parser')
// 본문 해석
// body-parser참고 사이트 https://backback.tistory.com/336
const nunjucks = require('nunjucks')
const app = express()
const ctoken = require('./jwt')
require('dotenv').config('./env')
/*
 const path = require('path')
 require('dotenv').config({path:path.join(__dirname,'.env')})
// require('dotenv').config('./env')에서 오류 발생시 아래와 같은 코드 이용
*/
const port = process.env.PORT||3012
const cookieParser = require('cookie-parser')
const router = require('./routers/index.js')

app.set('view engine','html')

app.use(bodyParser.json())
//json형식으로 데이터를 가져오는 방식을 사용하겠다는 것
//req.body.name이나 req.body.age등 req.body. 을 통해 원하는 값을 가져올 수 있다. 
app.use(bodyParser.urlencoded({extended:false}))
//false일 경우 node.js에 기본 내장된 querystring 사용
app.use(express.static('public'))
app.use(cookieParser())

nunjucks.configure('views',{express:app})

app.get('/',router)


app.listen(port,()=>{
    console.log(`server start port ${port}`)
})