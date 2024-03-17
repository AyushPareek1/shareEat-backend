const express = require('express');
require('dotenv').config();
const app = express();
app.use(express.json());
const mongo = require('./db.controller/mongo')
const cors = require('cors');
app.use(cors());
//yash 

const signin = require('./routes/signin');
const signup = require('./routes/signup');
const registerDonor = require('./routes/registerDonor');
const registerNgo = require('./routes/registerNgo');
const listDonation = require('./routes/listDonation');
const getAllDonors = require('./routes/getAllDonors');
const getAllNgos = require('./routes/getAllNgos');
const acceptListing = require('./routes/acceptListing');

app.use(signin);
app.use(signup);
app.use(registerDonor);
app.use(registerNgo);
app.use(listDonation);
app.use(getAllDonors);
app.use(getAllNgos);
app.use(acceptListing)



app.listen(process.env.PORT || 3000 , () => {
    console.log(`Server is running on port: ${process.env.PORT || 3000}`);
});