require('dotenv').confiv();
const crypto = require('crypto')
const ctoken = require('../jwt')

module.exports = (req,res,next)=>{
    let {AccessToken} = req.cookies
    if(AccessToken==undefined){
        res.redirect('/?msg=로그인을 진행해주세요')
        return 0
    }
    let [header,payload,sign] = AccessToken.split('.')
    let signature = getSignature(header,payload)
    console.log('authpage signature',signature)
}