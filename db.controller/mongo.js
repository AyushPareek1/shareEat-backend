//? setting up mongo connection

const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const connectionURL =
  "mongodb+srv://ayushpareek873:RD0qVzJkuBLGdsbB@cluster1.5tmgm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1";
mongoose.connect(connectionURL, {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => console.log("Connected to MongoDB"));

module.exports = db;
