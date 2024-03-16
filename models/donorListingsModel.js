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
        type: String,
        required: true
    },
    shelfLife: {
        type: String,
        required: true
    },
    gift: {
        type: Boolean,
        required: true
    },
    price :{
        type: String,
        // required: true
    
    },
    active : {
        type: Boolean,
        default : true
    }
});

const DonorListing = mongoose.model('DonorListing', donorListingsSchema);

module.exports = DonorListing;