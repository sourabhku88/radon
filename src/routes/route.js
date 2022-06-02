const express = require("express");

const {filmes} = require('../filme/filmes')

const router = express.Router();


// Movie API 
router.get("/movies", (req, res) => {
  const movies = [
    "The Shawshank Redemption ",
    "The Godfather",
    " The Dark Knight",
    " The Godfather: Part II",
    " 12 Angry Men ",
    " Schindler's List ",
    "The Lord of the Rings: The Return of the King",
    " Pulp Fiction",
  ];
  res.send(movies);
});

// single Movie API 
router.get("/movies/:indexNumber", (req, res) => {
  const movies = [
    "The Shawshank Redemption ",
    "The Godfather",
    " The Dark Knight",
    " The Godfather: Part II",
    " 12 Angry Men ",
    " Schindler's List ",
    "The Lord of the Rings: The Return of the King",
    " Pulp Fiction",
  ];

  if ( 0 > req.params.indexNumber ||  movies.length <= req.params.indexNumber) {
    res.send("Please Enter vailde Index number ");
  } else {
    res.send(movies[req.params.indexNumber]);
  }
});

// filmes API
router.get('/films',(req,res)=>{
res.send(filmes)
})

// single filems API
router.get('/films/:filmId',(req,res)=>{
  if ( 0 >= req.params.filmId ||  filmes.length < req.params.filmId) {
    res.send("No movie exists with this id");
  } else {
    const filmeData = filmes.find(ele => ele.id === +req.params.filmId)
    res.send(filmeData);
  }
})
module.exports = router;
// adding this comment for no reason
