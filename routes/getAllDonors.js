const express = require('express');
const donorModel = require('../models/donorModel');

const router = express.Router();

router.get('/getAllDonors', async (req, res) => {
    try {
        const donors = await donorModel.find().populate('listings');
        res.json(donors);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

module.exports = router;