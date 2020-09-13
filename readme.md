express
node 框架
1. npm init -y 一键初始化
    文件名不要和框架、包同名  不要用中文 数字
2.npm install express -s 下载express
3.app.listen(8080);
    原理 第一个...arg是把参数变成一个数组 第二个是把参数铺平
    app.listen = function(...arg){
        require('http').createServer(app).listen(...arg)
    }
    app.listen(8080,function(){})
- 运行
    - 命令行运行 node+文件名
    - vscode 插件 Code Runner
- 改完需要重启
    nodemon 可以自动重启 
    - npm install nodemon -g
    - nodemon + 文件名

4.express 主要对 res 和 req 进行了封装
5.res.sendStatus(404)等于 res.send('not found')+res.status(404)
6.app.all 所有的请求方式

7.中间件 文档 资源 中间件 

cors 中间件  跨域  npm install cors  跨域资源共享

body-parser 中间件 解析带请求体（post，put）数据  npm install body-parser

解析formdata 处理数据格式的中间件
bodyParser.urlencoded({extended:false})

解析json
bodyParser.json()

发送请求的格式
允许携带cookie 
xhr.withCredentials = true;

静态文件中间件 express内置的
app.use(express.static('public'))
public 表示文件夹 会自动使用 public下的 文件a
静态文件 css js html img



postman 中 raw 表示源码的意思


持久化登录 jwt 认证
jwt json web token
npm install jsonwebtoken