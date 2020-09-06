const { Schema } = require('../conn')

module.exports = new Schema({
    photoImg:{
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    sex: {
        type: String,
        required: true
    }
})