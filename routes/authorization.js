const router = require('express').Router();
const { createUser, login } = require('../controllers/users');
const { signUp, signIn } = require('../middlewares/validation');

router.post('/signup', signUp, createUser);

router.post('/signin', signIn, login);

router.get('/signout');

module.exports = router;
