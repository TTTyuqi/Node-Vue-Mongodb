
//创建后端管理界面的端口
module.exports = (app) => {
    const express = require('express')
    //根据用户民去数据库查找用户
    const userAdmin = require('../../moudles/AdminUser')
    //返回token 我们需要用到一个jsonwebtoken模块,比较流行做web token验证的;npm install jsonwebtoken
    const jwt = require('jsonwebtoken')
    //这里使用http-assert一个模块，用来对错误进行处理 安装这个模块，npm install http-assert
    const assert = require('http-assert')
    //引入登陆验证的token的自定义模块
    const checktoken = require('../../middleware/auth')
    //引个资源的自定义模块
    const resource= require('../../middleware/resouce')
    const router = express.Router({
        mergeParams:true
    });
    router.post('/',async (req,res) => {
        let res1 = await req.Model.create(req.body)
        res.send(res1)
    }) 
    router.put('/:id',async (req,res) => {
        const moudel = await req.Model.findByIdAndUpdate(req.params.id,req.body)
        res.send(moudel)
    })
    router.get('/',async (req,res) => {
        const queryOptions = {}
        if(req.Model.modelName === 'Catrgory'){
            queryOptions.populate= 'parent'
        }
        const model = await req.Model.find().setOptions(queryOptions)
        res.send(model)
    }) 
    router.get('/:id',async (req,res) => {
        const model = await req.Model.findById(req.params.id)
        res.send(model)
    })
    router.delete('/:id',async (req,res) => {
        const moudel = await req.Model.findByIdAndDelete(req.params.id)
        res.send({
            success:true
        })
    })
    app.use('/admin/api/rest/:resource',checktoken(),resource(),router)

    //express 本身是获取不到上传的文件的数据，我们需要一个中间件multer来处理上传的数据
    //使用 npm install multer 安装
    const multer = require('multer')
    //定义一个上传中间件
    const uploder = multer({dest: __dirname+'/../../uploader/images'})
    app.post('/admin/api/upload',checktoken(),uploder.single('file'),async (req,res) => {
        // console.log('res',req.file)
        const fileone = req.file
        // fileone.url= `http://localhost:3000/uploader/images/${fileone.filename}`
        fileone.url= `http://gucui.tttyuqi.xyz/uploader/images/${fileone.filename}`
        res.send(fileone)
    })

    //登陆接口的路由
    app.post('/admin/api/login',async (req,res) => {
        //获取前段请求的参数，使用ES6的结构赋值
        const {userName,passWord} = req.body
        //在数据库实例中对passWord这个字段设置selectz;fales 默认查询的时候不查询该字段
        const user = await userAdmin.findOne({userName}).select('+passWord')
        assert(user,422,'用户不存在')
        // if(!user){
        //     return res.status(422).send({
        //         type:'error',
        //         message:'用户不存在'
        //     })
        // }
        //验证密码,后台数据库对用户的密码使用bcrypt进行了加密
        const isTure = require('bcrypt').compareSync(passWord,user.passWord)
        assert(isTure,422,'密码错误')
        // if(!isTure){
        //     return res.status(422).send({
        //         type:'error',
        //         message:'密码错误'
        //     })
        // }

        //使用这个模块中sign方法，生成一个token，一个参数为生成token的源数据，第二参数为生成token的密钥
        const token = jwt.sign({id:user._id},app.get('secret'))
        res.send({token})
    })
    //错误处理函数
    app.use(async (err,req,res,next) => {
        res.status(err.statusCode || 500).send({
            message:err.message
        })
    })
}