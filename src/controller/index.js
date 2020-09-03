const model = require('../models/model/newsData')
const newsData = require('../public/newsData')

module.exports = {
    async index(req,res){
        // console.log(1);
        // console.log(newsData);
        // await model.insert(newsData)
        res.send('ok.')
    },

    async getNews(req,res){
        let data = await model.find()
        console.log(data);
        res.send(data)
    },

    async addNews(req,res){
        console.log(req.body);
        let data = await model.find()
        // 判断数据库是否有改数据
        var isAdd = data.some(v=>{
            return v === req.body.news
        })

        if(!isAdd){
            await model.insert({
                title: req.body.news
            })
            res.send({
                status:200,
                message: 'success'
            })
        }else{
            res.send({
                status: 201,
                message: '改数据已存在'
            })
        }
    }
}