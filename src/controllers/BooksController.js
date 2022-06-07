const BooksSchema = require("../models/bookModels");

const createBook = async (req, res) => {
  const data = await BooksSchema.create(req.body);
  res.send(data);
};

const bookList = async (req, res) => {
  const allData = await BooksSchema.find().select(
    { bookName: 1 , authorName: 1 , _id: 0 }
  );
  res.send(allData);
};

const getBooksInYear = async (req, res) => {
  const data = await BooksSchema.find(req.body);
  res.send(data);
};

const getParticularBooks = async (req, res) => {
  const data = await BooksSchema.findOne(req.body);
  res.send(data);
};

const getXINRBooks = async (req, res) => {
  const data = await BooksSchema.find({
    "price.indianPrice": { $in: [100, 200, 500] },
  });
  res.send(data)
};
const getRandomBooks = async (req, res) => {
  const data = await BooksSchema.find({$and :[ { stockAvailable: true } , { totalPages: { $gt:  500 } }]});
  res.send(data)
};

module.exports = {
  createBook,
  bookList,
  getBooksInYear,
  getParticularBooks,
  getXINRBooks,
  getRandomBooks,
};
