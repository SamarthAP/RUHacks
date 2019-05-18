const express = require('express');
const router = express.Router();

const user_controller = require('../controllers/user.controller');

router.get('/all', user_controller.users_get);

module.exports = router;