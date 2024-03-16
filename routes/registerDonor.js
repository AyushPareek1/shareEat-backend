const express = require('express');
const donorModel = require('../models/donorModel');
const userCreds = require('../models/userCreds');

const router = express.Router();

router.post('/registerDonor', async (req, res) => {
    try {
        const { name, email, phoneNumber, address, foodType, openingTime, closingTime } = req.body;

        const currentUser = await userCreds.findOne({ email });

      const Donor  = await donorModel.create({ name, email, phoneNumber, address, foodType, openingTime, closingTime });
      Donor.save();
      currentUser.donorAccountDetails = Donor._id;

        await currentUser.save();

        res.status(200).json({ message: 'Donor registered successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;