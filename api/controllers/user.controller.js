const User = require('../models/user.model');
const vision = require('@google-cloud/vision');

exports.users_get = function (req, res) {
    User.find({}, function (err, items) {
        if (err) return next(err);
        res.send(items);
    });
}

exports.user_get = function (req, res) {
    User.find({username: req.params.username}, function (err, user) {
        if (err) return next(err);
        res.send(user);
    })
}

exports.create_user = function (req, res) {
    let user = new User({
        username: req.body.username,
        bills: []
    });
    user.save(function(err) {
        if (err) return next(err);
        res.send(user)
    })
}

exports.analyse = async function analyse(req, res) {
    // Creates a client
    const client = new vision.ImageAnnotatorClient();

    /**
     * TODO(developer): Uncomment the following line before running the sample.
     */
    const fileName = 'assets/test.png';

    // Performs text detection on the local file
    const [result] = await client.textDetection(fileName);
    const detections = result.textAnnotations;
    console.log('Text:');
    detections.forEach(text => console.log(text));    

    res.send(detections);
}