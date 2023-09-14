const authorization = require('./authorization');
const users = require('./users');
const auth = require('../middlewares/auth');
const NotFoundError = require('../errors/NotFoundError');
const movies = require('./movies');
const { errorMessages } = require('../utils/constants');

module.exports = function (app) {
  app.use('/', authorization);

  app.use(auth);

  app.use('/users', users);
  app.use('/movies', movies);

  app.all('*', (req, res, next) => {
    next(new NotFoundError(errorMessages.incorrectPath));
  });
};
