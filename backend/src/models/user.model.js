const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true ["user already exists"],
        required: true
       
    },
    email: {
        type: String,
        required: true,
        unique: [true,  "email already exists with email this address"]
    },
    password: {     
        type: String,
        required: true
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
