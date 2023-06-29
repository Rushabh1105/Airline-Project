const express = require('express');

const UserController = require('../../controllers/user-controller');
const { AuthRequestValidator } = require('../../middlewares/index')

const router = express.Router();

router.post('/signup', AuthRequestValidator.validateUserSignup, UserController.createUser);
router.post('/signin', AuthRequestValidator.validateUserSignup, UserController.signIn);
router.get('/isAuthenticated', UserController.isAuthenticated);
router.get('/isadmin', AuthRequestValidator.validateIsAdminRequest, UserController.isAdmin);
router.get('/dummy', (req, res) => {
    return res.status(200).json({
        message: 'Okk'
    })
});

module.exports = router;