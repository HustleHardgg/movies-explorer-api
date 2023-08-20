const router = require('express').Router();
const { signUp, signIn } = require('../middlewares/validation');
const { createUser, login, logout } = require('../controllers/users');

router.post('/signup', signUp, createUser);

router.post('/signin', signIn, login);

router.get('/signout', logout);

module.exports = router;
