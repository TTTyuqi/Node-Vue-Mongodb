//创建一个实体类
const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: { type: String},
    parent: {type: mongoose.SchemaTypes.ObjectId,ref: 'Catrgory'}
})

//导出这个实体类
module.exports = mongoose.model('Catrgory',schema)