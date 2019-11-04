const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let headlineSchema = new Schema({
    headline:{
        type:String,
        required:true,
        unique:{index:{unique:true}}
    },
    summary:{
        type:String,
        required:true
    },
    url:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    },
    saved:{
        type:boolean,
        default:false
    }
})

let Headline = mongoose.model("Headline",headlineSchema)

module.export = Headline;