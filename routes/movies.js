const router = require('express').Router();
const {
  validationPostMovie,
  validationDeleteMovie,
} = require('../middlewares/validation');

const {
  createMovie,
  deleteMovie,
  getMovies,
} = require('../controllers/movies');

router.get('/', getMovies);
router.post('/', validationPostMovie, createMovie);
router.delete('/:_id', validationDeleteMovie, deleteMovie);

module.exports = router;
