// 引入express express是个函数
let express = require('express');
// express执行固定（一般）叫做app
let app = express();

// 放在需要处理的路径前边处理通用逻辑  可以进行权限校验等 必须写next 才会继续向下走 拦截req 、res
// 不带路径表示所有 第一个参数可以写路径 带路径表示匹配这个路径的处理
// 中间件可以做一些通用的逻辑处理 但是必须要放在处理路径的前边
// app.use(function(req,res,next){
//     res.setHeader('content-type','text/plain;charset=utf8')
//     next()
// })
// app.use('/sign',function(req,res,next){
//     res.setHeader('content-type','text/plain;charset=utf8')
//     next()
// })

// express把各个方法进行封装 参数就是 路径 callback 路径不带任何参数的绝对路径
// 代码从上到下执行 匹配到路径就不再往下执行
// 对 res 和 req 进行了封装
// app.get('/sign',function(req,res){
//     // res.setHeader('content-type','text/plain;charset=utf8')
//     res.end('get登录')
// })
// app.get('/login',function(req,res){
//     // res.setHeader('content-type','text/plain;charset=utf8')
//     res.end('登录login')
// })
// app.post('/sign',function(req,res){
//     // res.setHeader('content-type','text/plain;charset=utf8')
//     res.end('post登录')
// })

// :id 路径参数 必须有 但是不固定 通过req.params 取到路径参数
app.get('/list/:id/:name',function(req,res){
    console.log(req.params);
    res.send('请求一个')
})

app.get('/list',function(req,res){
    res.send('请求多个')
})

app.get('/car',function(){
    res.send('第100个')
})

// app.get('/sign',function(req,res){
    // console.log(req.baseUrl,'baseUrl')
    // console.log(req.body,'body')
    // // method 封装的 
    // console.log(req.method,'method')
    // // 不带任何参数的路径
    // console.log(req.path,'path')
    // // ？后的字符串
    // console.log(req.query,'query')
    // console.log(req.params,'params')
    // // 请求头
    // console.log(req.headers,'headers')
    // res.send('get登录')
// })
app.post('/sign',function(req,res){
    console.log(req.body)
    res.send('post登录')
})
// app.get('/app',function(req,res){
//     res.send('not found')
//     res.status(404)
// })
// app.all 所有的请求方式
app.all('*',function(req,res){
    res.sendStatus(404)
})
// 端口号
app.listen(8080);
// 原理
// app.listen = function(...arg){
//     require('http').createServer(app).listen(...arg)
// }
// app.listen(8080,function(){})