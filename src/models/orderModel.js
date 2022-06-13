const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const orderSchema = new mongoose.Schema( {
    userId: {
        type:ObjectId,
        ref:"User"
    }, 
    productId: {
        type:ObjectId,
        ref:"Product"
    }, 
    amount: {type: Number, default: 100},
    date :{
        type:Date,
        default:Date.now
        },
    isFreeAppUser: {type: Boolean , default:false } 

}, { timestamps: true });


module.exports = mongoose.model('Order', orderSchema) 
