let express = require('express');
let app = express();
let cors = require('cors');
let bodyParser = require('body-parser');
let path = require('path');
// console.log(bodyParser.json())

// formdata json 数据格式

app.listen(3000);

// 访问静态文件
// app.use(express.static('public'))

// 跨域
app.use(cors())

// 解析请求体
// 加路径 访问时也要加路径
// app.use('/static',express.static('public'))
// __dirname 绝对路径
app.use(express.static(path.join(__dirname,'public')))
console.log(path.join(__dirname));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

// 路由
let user = require('./user/user');
app.use('/user',user)

let shop = require('./shop/shop');
app.use('/shop',shop)