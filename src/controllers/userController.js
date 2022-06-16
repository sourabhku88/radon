const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (abcd, xyz) {
  try {
    let data = abcd.body;
    if (Object.keys(data).length !== 0) {
      let savedData = await userModel.create(data);
      console.log(abcd.newAtribute);
      xyz.status(201).send({ msg: savedData });
    }else{
      xyz.status(400).send({status:false, msg: "Bad Requiest" });
    }
  } catch (error) {
    console.log(error.message);
    xyz.status(500).send({ status: false, error: error.message });
  }
};

const loginUser = async function (req, res) {
  try {
    let userName = req.body.emailId;
    let password = req.body.password;
    let user = await userModel.findOne({ emailId: userName, password: password });
    if (!user) res.status(400).send({status: false,msg: "username or the password is not corerct",});
      let token = jwt.sign(
        {
          userId: user._id.toString(),
          batch: "thorium",
          organisation: "FUnctionUp",
        },
        "functionup-thorium"
      );
      res.setHeader("x-auth-token", token);
      res.status(200).send({ status: true, data: token });

  } catch (error) {
    console.log(error.message);
    res.status(500).send({ status: false, error: error.message });
  }
};

const getUserData = async function (req, res) {
try{
  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails)
    return res.status(400).send({ status: false, msg: "No such user exists" });

   res.status(200).send({ status: true, data: userDetails });
}catch(error){
  console.log(error.message);
  res.status(500).send({ status: false, error: error.message });
}

};

const updateUser = async function (req, res) {
  try{
    let userId = req.params.userId;
    let user = await userModel.findById(userId);
    
    if (!user)  res.status(400).send("No such user exists");
    let userData = req.body;
    let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);
    res.status(200).send({ status: updatedUser, data: updatedUser });
  }catch(error){
   console.log(error.message);
   res.status(500).send({ status: false, error: error.message });
 }
};

const postMessage = async function (req, res) {
  try {
    let message = req.body.message;

    let user = await userModel.findById(req.params.userId);
    if (!user) return res.status(400).send({ status: false, msg: "No such user exists" });
  
    let updatedPosts = user.posts;
    updatedPosts.push(message);
    let updatedUser = await userModel.findOneAndUpdate(
      { _id: user._id },
      { posts: updatedPosts },
      { new: true }
    );
  
    return res.status(200).send({ status: true, data: updatedUser });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ status: false, error: error.message });
  }
 
};

const deleteUser = async (req, res) => {
  try {
    let userId = req.params.userId;

    let updatedUser = await userModel.findOneAndUpdate(
    { _id: userId },
    { $set: { isDeleted: true } },
    { new: true }
  );
  res.status(200).send({ status: updatedUser, msg: "Deleted user" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ status: false, error: error.message });
  }
  
};

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.postMessage = postMessage;
module.exports.deleteUser = deleteUser;
