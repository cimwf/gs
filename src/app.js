const express = require('express')
const bodyParser = require('body-parser')
const app = express()
var http = require('http').Server(app);
var io = require('socket.io')(http);
const routerIndex = require('./router/index')
const { socket } = require('./controller/socket')


http.listen(5000,()=>{
    console.log('5000端口已经启动');
})

// 中间件添加
app.use((req, res, next) => {
    // 跨域 
    // 所有的来源域名，我都接受

    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Credentials', 'true')
    res.header('Access-Control-Allow-Headers', '*')
    next()
})

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use(routerIndex)
// 连接
io.on('connection', socket);



