const express = require('express');
const router = express.Router();

const user_controller = require('../controllers/user.controller');

router.get('/all', user_controller.users_get);
router.get('/:username', user_controller.user_get);
router.post('/create', user_controller.create_user);
router.get('/analyse', user_controller.analyse);

module.exports = router;