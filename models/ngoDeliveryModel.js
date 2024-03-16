const mongoose = require('mongoose');

const ngoDeliverySchema = new mongoose.Schema({
    timeOfAccepting: {
        type: Date,
        required: true
    },
    payment: {
        type: Boolean,
        required: true
    }
});

const NgoDelivery = mongoose.model('NgoDelivery', ngoDeliverySchema);

module.exports = NgoDelivery;