const { model } = require('../conn')
const Schema = require('../schema')

class UserModel {
    constructor(){
        this.model = new model('MyClass',Schema)
    }

    insert(options){
        return this.model.insertMany(options)
    }

    findList(){
        return this.model.find()
    }

    deleteOne(options){
        return this.model.deleteOne(options)
    }
}

module.exports = new UserModel