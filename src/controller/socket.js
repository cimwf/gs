const model = require('../models/model/newsData')

module.exports = {
    socket(socket){
            //触发客户端client函数
            socket.emit('client','hello')
            // 等待客户端发送
            socket.on('server', async msg => {
                await model.insert({title:msg})
                var data = await model.findOne({title:msg})
                // 触发客户端message事件
                console.log(data);
                socket.emit('message', data)
            })
    }
}