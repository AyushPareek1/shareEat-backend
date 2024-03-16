const mongoose = require('mongoose');

const ngoSchema = new mongoose.Schema({
    ngoName: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    }
});

const Ngo = mongoose.model('Ngo', ngoSchema);

module.exports = Ngo;