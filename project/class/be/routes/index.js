const express = require('express')
const indexController = require('../controller/indexController')
const MDW = require('../middleware')
const router = express.Router()
const multer = require('multer')
const path = require('path')
const uploader = multer({
    dest:path.join(path.dirname(__dirname),'public','imgs')
})


router.get('/insert',indexController.insert)

router.post('/uploadIMG',[uploader.single('photoImg'),MDW.uploadIMG],indexController.uploadIMG)

router.get('/myClassList',indexController.findList)

router.post('/delUser',indexController.deleteUser)


router.get((err,req,res,next)=>{
    console.log('------');
    res.send(err.message)
})

module.exports = router