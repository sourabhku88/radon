const bookModel= require("../models/bookModel")

const createNewBook= async function (req, res) {
 const data =  await bookModel.create(req.body)
    res.send({msg: data})
}

const getBooksData= async function (req, res) {
    let allbooks = await bookModel.find()
    res.send({msg: allbooks})
}

module.exports.createNewBook= createNewBook;
module.exports.getBooksData= getBooksData;