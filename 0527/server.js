const express = require('express')
const nunjucks = require('nunjucks')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT||3009
const cookieParser = require('cookie-parser')
const token = require('./createtoken') //외부 js파일 가져오기


app.set('view engine','html')

app.use(cookieParser())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:false}))

nunjucks.configure('views',{express:app})


app.get('/',(req,res)=>{
    //key:value
    let {msg} = req.query;
    //res.send(``)
    res.cookie('token','algml')

    // 응답 메시지에 header부분에 쿠키를 생성하여 줌
    // res.cookie('키','값')
    // headers영역에 set-cookie:token=algml;
    //localhost:3009에 들어오면 위의 정보를 response의 set-cookie에 'algml'를 넘겨줌
    /*
    headers:{
        set-cookie:'token=algml';
    }
    */
    res.render('index')
    //res.send(`${msg}hello world<a href="/menu1">menu1</a><a href="/login?id=root&pw=root">로그인</a>`)
    // 실직적으로 데이터를 보내주는 것은 send가 한다.
    /*


    */
    //res.render('index')
})
/*
1. 브라우저 킴
2. localhost:3009입력  => 서버에 요청하는 행위
// 네트워크에서 요청 헤더를 확인
// 요청 헤더가 바로 서버에 보내는 메시지
// 첫번째 줄이 가장 중요 ~get
3. hello world 나옴  => 요청에 대한 응답
// 서버가 받은 요청메시지를 통해 일치하는 내용을 응답
// 요청 메시지에서 get을 보내왔다면 get에 대하여 응답
// res.send()나 res.render()는 결국 응답메시지를 완성시켜 보내줌
*/



app.get('/menu1',(req,res)=>{
    console.log(req.cookies)
    res.cookie('token','menu1')
    res.send('menu1페이지입니다.')
})

app.get('/login',(req,res)=>{
    const {id,pw} = req.query;
    //const {id,pw} = req.query;
    // 비구조할당문 사용이 let,const등의 변수선언문이 반드시 필요
    // 사용할 이유가 없다면 ()안으로 사용
    if(id=='root' &&pw=='root'){
        //토큰생성
        let ctoken = token
        res.cookie('token',ctoken,{httpOnly:true,secure:true,})
        res.redirect('/?msg=로그인성공')
    }else{
        //토큰실패
        res.redirect('/?msg=로그인실패')
    }
})
app.listen(port,()=>{
    console.log(`server start port ${port}`)
})


