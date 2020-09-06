const mongoose = require('mongoose')
const { path, opts } = require('../../config/env')

mongoose.connect(path, opts)

module.exports = mongoose