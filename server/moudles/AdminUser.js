const mongoose = require('mongoose')
//用户在保存密码的时候为了安全性，不能使用明文保存用户的密码，这时就要对数据库做一层操作，把用户的密码使用散列函数进行加密
//这里使用npm安装bcrypt模块，用于对数据库密码的加密  --npm install bcrypt
//select:false 这个属性让数据库自动不会被查出这个字段
const shema = new mongoose.Schema({
    userName:{type:String},
    passWord:{type:String,select:false,set(vel){
        return require('bcrypt').hashSync(vel,10)
    }}
})
module.exports=mongoose.model('AdminUser',shema)