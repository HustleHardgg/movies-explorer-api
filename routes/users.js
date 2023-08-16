const router = require('express').Router();
const { validationUpdateUser } = require('../middlewares/validation');

const { updateProfile, getMe } = require('../controllers/users');

router.patch('/me', validationUpdateUser, updateProfile);
router.get('/me', getMe);

module.exports = router; 