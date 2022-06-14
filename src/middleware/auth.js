const jwt = require('jsonwebtoken')
const auth = async (req,res,next)=>{
    try {
        if(!(req.headers['x-auth-token'])) res.send({msg:"token is not present"});
        else{
           
            let token = req.headers['x-auth-token'];
            const isVerify =  jwt.verify(token , "functionup-radon");
    
            if(isVerify) next();
            else res.send({status: false , msg : 'user has wrong token '})
        }
    
    } catch (error) {
        console.log(error);
        return res.send({status: false , msg : 'user has wrong token '})
    }
   
}

module.exports = { auth }