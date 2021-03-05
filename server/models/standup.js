const mongoose = require('mongoose')

const standupSchema = new mongoose.Schema({
    ProductName :{type:String},
    ProductCategory :{type:String},
    ProductDesc:{type:String},
    ProductPrice:{type:String},
    ProductImage:{type:String},
    
})
module.exports = mongoose.model('Standup',standupSchema)