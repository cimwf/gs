
const baseURL = require('../../config/base') 
const mongoose = require('mongoose')

mongoose.connect(baseURL.url,baseURL.opts) 

module.exports = mongoose