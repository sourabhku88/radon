const mongoose = require('mongoose');

const BooksSchemas = new mongoose.Schema({
    bookName:{
        type:String,
        required:true
    },
    price:{
        indianPrice:Number,
        european :Number,
    },
    year :{
        type:String,
        default:"2021"
    },
    tags :[String],
    authorName:String,
    totalPages :Number,
    stockAvailable :Boolean,
}, {timestamps:true})

module.exports = mongoose.model('Books', BooksSchemas);
