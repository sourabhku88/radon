// const BooksSchema = require("../models/bookModels");
const authorModal = require('../models/authorModal');
const booksDay3 = require('../models/bookModal3')
// const createBook = async (req, res) => {
//   const data = await BooksSchema.create(req.body);
//   res.send(data);
// };

// const bookList = async (req, res) => {
//   const allData = await BooksSchema.find().select(
//     { bookName: 1 , authorName: 1 , _id: 0 }
//   );
//   res.send(allData);
// };

// const getBooksInYear = async (req, res) => {
//   const data = await BooksSchema.find(req.body);
//   res.send(data);
// };

// const getParticularBooks = async (req, res) => {
//   const data = await BooksSchema.findOne(req.body);
//   res.send(data);
// };

// const getXINRBooks = async (req, res) => {
//   const data = await BooksSchema.find({
//     "price.indianPrice": { $in: [100, 200, 500] },
//   });
//   res.send(data)
// };
// const getRandomBooks = async (req, res) => {
//   const data = await BooksSchema.find({$and :[ { stockAvailable: true } , { totalPages: { $gt:  500 } }]});
//   res.send(data)
// };

// module.exports = {
//   createBook,
//   bookList,
//   getBooksInYear,
//   getParticularBooks,
//   getXINRBooks,
//   getRandomBooks,
// };
// no hendle edge case 


// create Books
const createBooks = async(req,res) =>{
  if(!req.body.author_id){
    res.send({msg:"please enter auther id"})
  }else{
    const data = await booksDay3.create(req.body);
    res.send({msg:data})
  }
}

// create Author
const findByNameAndsendBook = async (req,res)=>{
  const author = await authorModal.findOne({author_name:"Chetan Bhagat"});
  const id = author.author_id;
  const books = await booksDay3.find({author_id:id})
  res.send({msg:books});
}

// finde auhtor
const findAuthor = async (req,res)=>{
 const book = await booksDay3.findOneAndUpdate({name:"Two states"} , {price :100} ,{new:true});
 const author = await authorModal.find({author_id:book.author_id}).select({author_name:1,_id:0});
 res.send({UpdateBook : book , authorName : author})
}
 
// findeBookByCost
const findBookByCost = async (req,res) => {
  const bookAuthorName = await booksDay3.find({price : { $gte: 50, $lte: 100}});
  const autherName = await authorModal.find({author_id:bookAuthorName[0].author_id})
  res.send({bookName: bookAuthorName , auhtorName: autherName})
}

module.exports = {createBooks,findByNameAndsendBook,findBookByCost ,findAuthor}