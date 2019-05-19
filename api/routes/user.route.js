const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './assets')
    },
    filename: function (req, file, cb) {
        cb(null, 'image' + path.extname(file.originalname))
    }
})

var upload = multer({storage: storage});

const user_controller = require('../controllers/user.controller');

router.get('/all', user_controller.users_get);
router.get('/:username/get', user_controller.user_get);
router.get('/:username/getbills', user_controller.get_bills);
router.get('/analyse', user_controller.analyse);
router.post('/create', user_controller.create_user);
router.post('/upload', upload.single('file'));
router.put('/:username/addbill', user_controller.add_bill);

module.exports = router;