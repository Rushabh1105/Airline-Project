const express = require('express');

const v1Routes = require('./V1/auth-routes');

const router = express.Router();

router.use('/v1', v1Routes);

module.exports = router;