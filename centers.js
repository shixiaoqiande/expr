function app(){}
// 中间件原理 调用一次next 执行数组的一项
let middle = [];
app.use = function(fn){
    middle.push(fn)
}
app.use(function(){
    console.log(1)
    next()
})
app.use(function(){
    console.log(2)
    next()
})
app.use(function(){
    console.log(3)
    next()
})
let index = 0;
function next(){
    if(index<middle.length){
        middle[index++](null,null,next)
    }
}
next()