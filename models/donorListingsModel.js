const mongoose = require('mongoose');

const donorListingsSchema = new mongoose.Schema({
    location: {
        type: String,
        required: true
    },
    foodType: {
        type: String,
        required: true
    },
    diabetic: {
        type: Boolean,
        default: false
    },
    listingTime: {
        type: Date,
        default: Date.now
    },
    shelfLife: {
        type: Number,
        required: true
    },
    gift: {
        type: Boolean,
        required: true
    }
});

const DonorListing = mongoose.model('DonorListing', donorListingsSchema);

module.exports = DonorListing;