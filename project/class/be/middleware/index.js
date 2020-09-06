const model = require('../models/model')
const path = require('path');
const fs = require('fs');
module.exports = {
    uploadIMG(req,res){
        console.log(req.file);
        console.log(req.body);
        let file = req.file
        let data = {...req.body}
        for(var key in data){
            if(!data[key]){
                throw new Error(`${key}没上传`)
            }
        }
        if(file){
            // 获取后缀名
            const extname = path.extname(file.originalname)
            // 获取上传成功的路径
            const filePath = file.path
            // 设置成功后的图片
            const filename = file.filename + extname
            // 重命名
            fs.rename(filePath,path.join(path.dirname(filePath),filename),async err=>{
                if(!err){
                    data.photoImg = '/imgs/'+filename
                    console.log(data);
                    await model.insert(data)
                }else{
                    throw new Error('头像上传失败')
                }
            })
        }else{
            throw new Error('没上传头像')
        }
        res.send('太棒了宝贝儿！')
    }
}