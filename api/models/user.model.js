const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let bill = new Schema({
    vendor: {type: String, required: true},
    date: {type: Date, required: true},
    transaction_type: {type: String, required: false},
    total: {type: Number, required: true} 
});

let user = new Schema({
    username: {type: String, required: true},
    bills: {type: [bill], required: true}
});

module.exports = mongoose.model('User', user);