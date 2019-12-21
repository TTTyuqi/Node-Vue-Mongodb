const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name:{type:String},
    avatar:{type:String},
    banner:{type:String},
    title:{type:String},
    caterorus:[{type:mongoose.SchemaTypes.ObjectId,ref:'Catrgory'}],
    scores: {
        diffcult:{type:Number},
        skill:{type:Number},
        attack:{type:Number},
        survive:{type:Number}
    },
    skills:[{
        skiName:{type:String},
        skiIcon:{type:String},
        delay:{type:String},
        cost:{type:String},
        discription:{type:String},
        tipes:{type:String}
    }],
    itmes1:[{type:mongoose.SchemaTypes.ObjectId,ref:'Items'}],
    itmes2:[{type:mongoose.SchemaTypes.ObjectId,ref:'Items'}],
    usageTips:{type:String},
    attackTips:{type:String},
    teamTips:{type:String},
    partners:[{
        hero:{type:mongoose.SchemaTypes.ObjectId,ref:'Hero'},
        description:{type:String}
    }]

})
module.exports = mongoose.model('Hero',schema)