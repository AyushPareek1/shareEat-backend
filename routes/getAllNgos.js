const express = require('express');
const ngoModel = require('../models/ngoModel');

const router = express.Router();

router.get('/getAllNgos', async (req, res) => {
    try {
        const ngos = await ngoModel.find();
        res.json(ngos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

module.exports = router;