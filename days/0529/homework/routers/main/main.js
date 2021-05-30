const express = require('express')
const router = express.Router()

let main = router.use('/',(req,res)=>{
    let {msg} = req.query;
    res.cookie('token','algml')
    res.render('main')
})

module.exports = {
    main
}