const orederModel = require("../models/orderModel");
const productModel = require("../models/productModel");
const userModel = require("../models/userModel")

const createOrder= async function (req, res) {
    let {userId , productId , isFreeAppUser } = req.body;
     isFreeAppUser = req.headers.isfreeappuser;

    if(!userId || !productId) res.send({msg:"please enter userId and productId"});

    const userDetails = await userModel.findById(userId);
    const productDetails = await productModel.findById(productId);
    if(!userDetails || !productDetails)  res.send({msg:"userId and productId is not valid"});

    if("true"=== isFreeAppUser){
            await orederModel.updateOne(req.body, {$set:{isFreeAppUser:isFreeAppUser , amount :0  }  } , {new:true, upsert:true})
            res.send( {msg :"Order created !" })
    }else{

        if(userDetails.balance - req.body.amount < 0 )  res.send( {msg :"user doesn't have enough balance" })
         else{
            await userModel.updateOne({_id:userId} , {$set:{  balance : userDetails.balance - req.body.amount }}, {new:true,upsert:true} )
            await orederModel.updateOne( req.body , {$set:{  amount : req.body.amount }  } , {new:true,upsert:true})
            res.send({msg:"Order created"})
         }
       
    }
    
}





module.exports = {createOrder}

