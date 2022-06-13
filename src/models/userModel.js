const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    name: {type:String, required:true},
	balance:{type:Number , default:100}, // Default balance at user registration is 100
	address:{type:String, required:true},
	age: {type:Number},
 	gender: {type:String,enum:["male","female","other"]}, // Allowed values are - “male”, “female”, “other”
	isFreeAppUser: { type:Boolean,default:false} // Default false value.
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema) //users

