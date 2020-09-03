const express = require('express')
const indexController = require('../controller/index')
const router = express.Router()

router.get('/',indexController.index)
router.get('/news',indexController.getNews)
router.post('/addNews',indexController.addNews)


module.exports = router