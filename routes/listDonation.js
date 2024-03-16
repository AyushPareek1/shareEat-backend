const express = require('express');
const donorListingSchema = require('../models/donorListingsModel');
const donorModel = require('../models/donorModel');

const router = express.Router();

router.post('/listDonation', async (req, res) => {
    console.log(req.body);
    try {
        const { location, foodType, diabetic, listingTime, shelfLife, gift,price } = req.body;

        const newListing = new donorListingSchema({
            location,
            foodType,
            diabetic,
            listingTime,
            shelfLife,
            gift,
            price
        });

        await newListing.save();

        
        const donor = await donorModel.findOne({ email: req.body.email });

      
        donor.listings.push(newListing._id);


        await donor.save();

        res.status(200).json({ message: 'Listing created successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'An error occurred while creating the listing' });
    }
});

module.exports = router;