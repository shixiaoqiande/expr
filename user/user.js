// 登录注册模块
// express 路由 
let express = require('express');
//  创建一个路由集合 Router是一个函数 固定写法
let router = express.Router();

// 访问路径 user/...
router.get('/login',function(req,res){
    res.send('登录')
})
router.get('/sign',function(req,res){
    res.send('注册')
})
// 导出路由
module.exports = router;