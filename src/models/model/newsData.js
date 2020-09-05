const { model } = require('../conn/conn')
const newsData = require('../schema/saveData')

class NewsData{
    constructor(){
        this.model = model('NewsData',newsData)
    }

    insert(options){
        return this.model.insertMany(options)
    }

    find(){
        return this.model.find()
    }

    findOne(options){
        return this.model.findOne(options)
    }
}

module.exports = new NewsData