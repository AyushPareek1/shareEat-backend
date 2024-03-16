const express = require('express');
const donorListingModel = require('../models/donorListingsModel');

const router = express.Router();

router.post('/acceptListing', async (req, res) => {
    try {
        console.log(req.body)
        const { listingId} = req.body;

       
        const listing = await donorListingModel.findById(listingId);

        if (!listing) {
            return res.status(404).json({ error: 'Listing not found' });
        }

        
        listing.active = false;

       
        await listing.save();

        return res.status(200).json({ message: 'Listing accepted successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;