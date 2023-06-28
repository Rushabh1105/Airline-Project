const express = require('express');

const UserController = require('../../controllers/user-controller');
const { AuthRequestValidator } = require('../../middlewares/index')

const router = express.Router();

router.post('/signup', AuthRequestValidator.validateUserSignup, UserController.createUser);
router.post('/signin', AuthRequestValidator.validateUserSignup, UserController.signIn)

module.exports = router;