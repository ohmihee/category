const express = require('express')
const nunjucks = require('nunjucks')
const app = express()
const port = process.env.PORT||3003

nunjucks.configure('views',{
    express:app
})

app.set('view engine','html')

app.get('/',(req,res)=>{
    res.render('index')
})

app.listen(port,()=>{
    console.log(`server start port`,port)
})


/* API사용법 */

// 애플리케이션 프로그래밍 인터페이스
// 특정 파일   마우스 or 키보드 or 리모컨

// 카카오 개발자 페이지
// https://developers.kakao.com/docs/latest/ko/local/dev-guide

// restapikey -> 카카오 개발자 페이지 -> 내애플리케이션 -> restapikey


// 공부할 것 ======================================================
// promise객체
// async-await
// then-catch
// fetch
// axios
// http구조
// url / uri
// api 적용 
