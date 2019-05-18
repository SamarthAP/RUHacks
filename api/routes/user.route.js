const express = require('express');
const router = express.Router();

const user_controller = require('../controllers/user.controller');

router.get('/all', user_controller.users_get);
router.get('/analyse', user_controller.analyse);

module.exports = router;