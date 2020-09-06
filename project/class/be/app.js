const express = require('express')
const bodyParser = require('body-parser')
const indexRouter = require('./routes')

const app = express()

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', '*')
    next()
})

app.listen(3000,()=>{
    console.log('3000端口已经成功启动，可以开始写bug了');
})

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(indexRouter)
