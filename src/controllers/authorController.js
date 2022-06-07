const authorModal = require("../models/authorModal");

const createauthor = async(req,res) =>{
    if(!req.body.author_id){
      res.send({msg:"please enter auther id"})
    }else{
      const data = await authorModal.create(req.body);
      res.send({msg:data})
    }
  }
  
  module.exports = {createauthor}