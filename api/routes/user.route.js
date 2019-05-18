const express = require('express');
const router = express.Router();

const user_controller = require('../controllers/user.controller');

router.get('/all', user_controller.users_get);
router.get('/:username', user_controller.user_get);
router.get('/analyse', user_controller.analyse);
router.post('/create', user_controller.create_user);
router.put('/:username/addbill', user_controller.add_bill);

module.exports = router;