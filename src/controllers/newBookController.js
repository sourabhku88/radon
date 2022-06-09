const newBook = require('../models/newBook');
const newAuthor = require('../models/newAuthor');
const newPublisher = require('../models/newPublisher');


// CREATE BOOK HENDLER
const createBook = async (req,res) =>{
   const {author , publisher} = req.body;
    if(!author || !publisher){
      return  res.send({msg:" author and publisher both are required"})
    }else{
        const authorId = await newAuthor.findById(author); 
        const publisherId = await newPublisher.findById(publisher);
        if(!authorId || !publisherId){
            return  res.send({msg:" authorID and publisherID is not valid "})
        }else{
           const data = await newBook.create(req.body);
          return res.send({msg:data, status:true})
        }
    }
}

// GET ALL BOOK WITH AUTHOR AND PUBLISHER
const getAllBook = async(req,res)=>{
    const data = await newBook.find().populate("author").populate('publisher');
    return res.send(data);
}

// PUT BOOK
const updateBookAttribute = async (req,res)=>{
    const publisher = await newPublisher.find( {$or:[{name:"HarperCollins "} , {name:"Penguin" } ] } );
    for(let i of publisher){
        const updateBookIsHarde = await newBook.updateMany({publisher:i, ratings:{$gt:3.5} } 
            , { isHardCover:true , $inc:{price:10} } , {new:true , upsert:true} )
    }
   return  res.send({msg: "Update" } )
} 



module.exports = {createBook ,getAllBook,updateBookAttribute}