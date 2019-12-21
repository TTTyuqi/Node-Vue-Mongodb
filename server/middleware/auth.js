//将验证登陆的token做为中间件，将其封装模块化的使用
module.exports = (options) => {
    //根据用户民去数据库查找用户
    const userAdmin = require('../moudles/AdminUser')
    //返回token 我们需要用到一个jsonwebtoken模块,比较流行做web token验证的;npm install jsonwebtoken
    const jwt = require('jsonwebtoken')
    //这里使用http-assert一个模块，用来对错误进行处理 安装这个模块，npm install http-assert
    const assert = require('http-assert')
    return async (req,res,next) =>{
        //获取请求头中的token
        const token = String(req.headers.authorization || '').split(' ').pop()
        assert(token,401,'请先登陆')
        //使用assert对错误进行处理，就不需要使用if，else去手动判断
        //使用该模块中verify()方法校验根据我们配置的token密钥解码这个token：返回的是用户的id,
        const {id} = jwt.verify(token,req.app.get('secret'))
        assert(id,401,'请先登陆')
        //根据解码出来的userid去数据库中查询该用户是否存在
        req.crUser = await userAdmin.findById(id)
        assert(req.crUser,401,'请先登陆')
        await next()
    }
}