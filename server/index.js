const express = require('express')

const app = express();

//给全局加一个属性，验证token的密钥
app.set('secret','ttyuqi')
//将跨域模块引用进来
app.use(require('cors')())
//将请求的参数转换为json格式
app.use(express.json())
//路由一个静态文件地址，通过输入对应的地址访问里面的资源
app.use('/uploader/images',express.static(__dirname+'/uploader/images'))
//路由一个静态后端服务地址，通过输入对应的地址访问里面的资源
// app.use('/admin',express.static(__dirname+'/admin'))
//路由一个静态前端服务地址，通过输入对应的地址访问里面的资源
// app.use('/',express.static(__dirname+'/web'))
//引入连接数据库的接口
require('./mongodb/db')(app)
//引入后端adm暴露的接口api
require('./router/admin/catgri')(app)
//引入前端web暴露的接口api
require('./router/web/index')(app)
app.listen(3000,() => {
    console.log("http://localhost:3000/已启动")
})