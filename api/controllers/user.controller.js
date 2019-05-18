const User = require('../models/user.model');
const vision = require('@google-cloud/vision');

exports.users_get = function (req, res) {
    User.find({}, function (err, items) {
        if (err) return next(err);
        res.send(items);
    });
}

exports.analyse = async function analyse(req, res) {

    const client = new vision.ImageAnnotatorClient();

    const fileName = 'assets/test.png';

    const [result] = await client.textDetection(fileName);
    const detections = result.textAnnotations;
    console.log('Text:');
    detections.forEach(text => console.log(text));    

    res.send(detections);
}