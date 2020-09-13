let express = require('express');
let router = express.Router();

router.post('/carlist',function(req,res){
    console.log(req.body);
    res.send('购物车')
})
router.get('/one',function(req,res){
    res.send('查找一个商品')
})

module.exports = router;