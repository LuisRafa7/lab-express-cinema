const express = require("express");
const router = express.Router();
const Movies = require("../models/Movie.model");

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

router.get("/movies", (req, res) =>
  Movies.find()
    .then((response) => res.render("movies", { movies: response }))
    .catch((err) => console.log(err))
);

router.get("/movies/:id", (req, res) => {
  const idMovie = req.params.id;
  Movies.findById(idMovie)
    .then((response) => res.render("singleMovie", { movie: response }))
    .catch((err) => console.log(err));
});

module.exports = router;
