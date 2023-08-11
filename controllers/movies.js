const movie = require('../models/movie');
const NotFoundError = require('../errors/NotFoundError');
const ForbiddenError = require('../errors/forbiddenError');
const ValidationError = require('../errors/validationError');
const { errorMessages } = require('../utils/const');

module.exports.getMovies = (res, next) => {
  movie.find({})
    .then((movies) => res.send(movies))
    .catch(next);
};

module.exports.createMovie = (req, res, next) => {
  const {
    year,
    image,
    description,
    movieId,
    country,
    director,
    duration,
    trailer,
    thumbnail,
    nameRU,
    nameEN,
  } = req.body;
  const own = req.user._id;
  movie.create({
    year,
    image,
    description,
    movieId,
    country,
    director,
    duration,
    trailer,
    thumbnail,
    nameRU,
    nameEN,
  })
    .then((movie) => res.send(movie))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new ValidationError(errorMessages.createMovie));
      } else {
        next(err);
      }
    });
};

module.exports.deleteMovie = (req, res, next) => {
  Movie.findById(req.params._id)
    .then((movie) => {
      if (!movie) next(new NotFoundError(errorMessages.movieNotFound));
      if (req.user._id === movie.owner.toString()) {
        return movie.remove();
      }
      return next(new ForbiddenError(errorMessages.removeMovie));
    })
    .then((movie) => res.send(movie))
    .catch(next);
};
