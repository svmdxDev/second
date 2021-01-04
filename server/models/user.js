const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    posts: {
        type: Array,
        default: []
    },
    date: {
        type: Date,
        default: Date.now()
    }
}, { collection: "users" })

module.exports = exports = mongoose.model('User', UserSchema)