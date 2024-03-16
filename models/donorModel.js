const mongoose = require('mongoose');

const donorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    foodType: {
        type: String,
        required: true
    },
    openingTime: {
        type: String,
        required: true
    },
    closingTime: {
        type: String,
        required: true
    },
    listings: {
        type: [mongoose.Schema.Types.ObjectId],
        default :[],
        ref: 'DonorListing'
    }
});

const Donor = mongoose.model('Donor', donorSchema);

module.exports = Donor;