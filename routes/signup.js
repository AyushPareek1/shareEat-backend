const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserCreds = require('../models/userCreds');
const router = express.Router();

router.post('/signup', async (req, res) => {
    try {
        console.log(req.body)
        const { name, email, password, orgType } = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);

        const token = jwt.sign({ email }, process.env.JWT_SECRET);

        const newUser = new UserCreds({ name, email, password: hashedPassword, orgType: orgType });
        newUser.save();
        res.json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;