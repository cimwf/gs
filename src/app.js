const express = require('express')
const bodyParser = require('body-parser')
const app = express()
var http = require('http').Server(app);
var io = require('socket.io')(http);
const routerIndex = require('./router/index')

io.set('transports', ['websocket', 'xhr-polling', 'jsonp-polling', 'htmlfile', 'flashsocket']);
io.set('origins','*')
io.origins(['*'])

app.listen(5000,()=>{
    console.log('5000端口已经启动');
})

// 中间件添加
app.use((req, res, next) => {
    // 跨域 
    // 所有的来源域名，我都接受
    // res.setHeader('Access-Control-Allow-Origin', '*')
    // res.setHeader('Access-Control-Allow-Credentials', 'true')
    // res.setHeader('Access-Control-Allow-Headers', '*')
    console.log(req.headers);
    // res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:5501')
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Credentials', 'true')
    res.header('Access-Control-Allow-Headers', '*')
    next()
})

io.on('connection', function(socket){
    socket.on('chat message', function(msg){
        console.log('message: ' + msg);
        io.emit('chat message',msg)
    });
});
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(routerIndex)

// app.get('/socket',(req,res)=>{
//     io.on('connection', function(socket){
//         socket.on('chat message', function(msg){
//           console.log('message: ' + msg);
//           io.emit('chat message',msg)
//         });
//     });
// })

