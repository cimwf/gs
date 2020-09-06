const model = require('../models/model')

module.exports = {
    async insert(req,res){
        // var data = {
        //     photoImg: '123',
        //     username: 'hhhh',
        //     phone: '123456',
        //     sex: '男'
        // }

        // await model.insert(data)
        res.send('ok.')
    },
    async findList(req,res){
        var data = await model.findList()
        res.send({
            data:data,
            message: '用接口的同学去添加一下自己的信息要不太少了,地址在url,多谢了',
            url:'http://10.9.70.203:3000/index.html'
        })
    },
    uploadIMG(req,res){
        res.send('太棒了宝贝儿！')
    },

    async deleteUser(req,res){
        console.log(req.body);
        await model.deleteOne(req.body)
        res.send('success')
    }
}