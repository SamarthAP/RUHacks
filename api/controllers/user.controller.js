const User = require('../models/user.model');

exports.users_get = function (req, res) {
    User.find({}, function (err, items) {
        if (err) return next(err);
        res.send(items);
    });
}