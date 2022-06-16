const jwt = require('jsonwebtoken')
const authenticate = function(req, res, next) {
  try {
    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];
  
    if (!token) return res.status(400).send({ status: false, msg: "token must be present" });
     
    let decodedToken = jwt.verify(token, "functionup-thorium");
    if (!decodedToken)
      return res.status(401).send({ status: false, msg: "token is invalid" });

    next()
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ status: false, error: error.message });
  }
   
}

const authorise = function(req, res, next) {
  try {
    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];
     
    let decodedToken = jwt.verify(token, "functionup-thorium");
    const  isCorrectPerson =  req.params.userId === decodedToken.userId;
    if(isCorrectPerson)  next()
    else res.status(401).send({status:false , msg:"Only login user change "})
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ status: false, error: error.message });
  }
}

module.exports = { authenticate ,authorise}
