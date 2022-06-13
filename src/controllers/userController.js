const UserModel= require("../models/userModel");

const createUser= async function (req, res) {
        const data = await UserModel.create(req.body);
        res.send({msg: data})
}

module.exports= {createUser}
