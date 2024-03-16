const express = require('express');
const ngoModel = require('../models/ngoModel');
const userCredsModel = require('../models/userCreds');

const router = express.Router();

router.post('/registerNgo', async (req, res) => {
    try {
       console.log(req.body)
        const { ngoName, phoneNo, email, address } = req.body;

        
        const newNgo = new ngoModel({
            ngoName,
            phoneNumber : phoneNo,
            email,
            address
        });

        
        const savedNgo = await newNgo.save();
        console.log(savedNgo);

        const userCreds = await userCredsModel.findOne({ email });

        
        userCreds.ngoAccountDetails = savedNgo._id;
        console.log(userCreds);

    
        await userCreds.save();

        res.status(200).json({ message: 'NGO registered successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;