const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    title:{type:String},
    categorys:[{type:mongoose.SchemaTypes.ObjectId,ref:'Catrgory'}],
    body:{type:String}
},{
    timestamps:true
})
// timestamps:true :设置时间戳，自动填写更新时间
module.exports= mongoose.model('Article',schema)