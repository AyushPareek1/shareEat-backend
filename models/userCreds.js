const mongoose = require('mongoose');

const userCredsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    orgType : {
        type: String,
        required: true
    },
    donorAccountDetails: {
        type: mongoose.Schema.Types.ObjectId,
        ref:  'Donor'
    },
    ngoAccountDetails : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Ngo'
    }
    
});

const UserCreds = mongoose.model('UserCreds', userCredsSchema);

module.exports = UserCreds;