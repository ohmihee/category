const url = require('url');

const {URL} = url;
const myURL = new URL("https://news.naver.com/main/main.nhn?mode=LSD&mid=shm&sid1=103")
console.log(`new URL: ${myURL}`)
console.log()