const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    lastname: String,
    email: String,
    password: String,
    role: String
});

const User = mongoose.model('User', UserSchema);

module.exports = User;