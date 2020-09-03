const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const routerIndex = require('./router/index')

app.listen(5000,()=>{
    console.log('5000端口已经启动');
})

// 中间件添加
app.use((req, res, next) => {
    // 跨域 
    // 所有的来源域名，我都接受
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', '*')
    next()
})
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(routerIndex)