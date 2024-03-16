const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserCreds = require('../models/userCreds');
const router = express.Router();

router.post('/signin', async (req, res) => {
    try {
        console.log(req.body)
        const { email, password } = req.body;

        const user = await UserCreds.findOne({ email });
         console.log(user)

        if(!user){
            return res.status(400).json({error : 'User not found'});
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid password' });
        }
        console.log(isMatch)
        const token = jwt.sign({ email  }, process.env.JWT_SECRET);
        res.json({ token });
    }
    catch (err) {
        console.log(err);
    }
});

module.exports = router;