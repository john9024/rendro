const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    
    firstname:{
        type: String,
    },

    lastname: {
        type: String,
    },

    address: {
        type: String,
    },

    photo: {
        type: String
    },

    phone: {
        type: String
    }
});

const Profile = mongoose.model('Profile', userSchema);

module.exports = Profile;