const newAuhtor = require('../models/newAuthor');

const createAuthor = async (req,res)=>{
    const data = await newAuhtor.create(req.body);
  return  res.send({msg:data,status:true})
}

module.exports = {createAuthor}