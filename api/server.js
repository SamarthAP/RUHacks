const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const user = require('./routes/user.route');

const app = express();

let db_url = 'mongodb+srv://ruhacks:DwipHacks!@userscluster-nxsn4.mongodb.net/test?retryWrites=true';
mongoose.connect(db_url);
mongoose.Promise = global.Promise;
let db = mongoose.connection;

db.on('connected', function() {
    console.log('Connected to database');
})
db.on('disconnected', function() {
    console.log('Disconnected from database');
});
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false})) // Check what urlencoded does
app.use('/api', user)

let port = 1111;

app.listen(port, () => {
    console.log('Server running on port ' + port);
})
