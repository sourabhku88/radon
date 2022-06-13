const productModel= require("../models/productModel")

const createProduct= async function (req, res) {
    let savedData= await productModel.create(req.body);
    res.send({data: savedData});
}

module.exports.createProduct = createProduct
