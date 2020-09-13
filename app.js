let express = require('express');
// express执行固定（一般）叫做app
let app = express();
let banners = require('./banners')
let cors = require('cors');
let bodyParser = require('body-parser');
let jwt = require('jsonwebtoken');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use(cors())

// app.get('/banner',(req,res)=>{
//     console.log(req.query.id)
//     res.json({
//         banners
//     })
// })
app.post('/sxq',(req,res)=>{
    console.log(req.body)
    res.json({
        code:200
    })
})

// 进行登录持久化验证的接口
// 访问这个接口时 一定要携带 token 前端页面每切换一次就访问一下这个接口 问一下我有没有登录 或者登录过期
app.post('/validate',function(req,res){
    let token = req.headers.authorization;
    // 验证token的合法性
    jwt.verify(token,'sxq',function(err,decode){
        if(err){
            res.json({
                msg:'当前用户未登录'
            })
        }else{
            // 证明用户已经登录 只要用户操作就会有过期时间
            res.json({
                username:decode.user,
                token:jwt.sign({username:decode.user},'sxq',{
                    // 过期时间
                    expiresIn:'1h'
                })
            })
        }
    })
})

// 持久化登录的原理
// 第一次登录时会返回一个经过加密的token
// 下一次访问接口时（携带登录返回给你的token）会对token进行解密 如果解密正确 证明你已经登录 再把过期时间延长
// 模拟一个登录接口 username password
app.post('/login',function(req,res){
    let {username} = req.body
    res.json({
        // sign 参数 加密的对象 加密的规则 
        token:jwt.sign({username},'sxq',{
            // 过期时间
            expiresIn:'1h'
        }),
        username
    })
})

app.listen(3000)

