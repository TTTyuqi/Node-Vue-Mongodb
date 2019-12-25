module.exports = app => {
    //连接mongodb数据库
    const mongoose = require('mongoose')
    // mongoose.connect('mongodb://localhost:27017/maclendb',{ useNewUrlParser : true,useUnifiedTopology: true})
    mongoose.connect('mongodb://47.244.91.39:27017/maclendb',{ useNewUrlParser : true,useUnifiedTopology: true})

    const db = mongoose.connection
    db.on('error',console.error.bind(console,'connection error:'));
    db.once('open',() => {
        console.log('ok')
   
    })
    //引用数据库中的所有模型
    //使用一个第三方模块 require-all -- npm install require-all
    require('require-all')(__dirname+'/../moudles')
}