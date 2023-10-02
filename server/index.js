const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userModel = require("./module/userModal"); // Corrected import

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/crud", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 30000, // Increase the timeout to 30 seconds
});


app.post("/createuser", (req, res) => {
    userModel.create(req.body) // Use userModel to create the user
    .then(user => {
        res.json(user);
    })
    .catch(err => {
        res.status(500).json({ error: err.message });
    });
});

app.listen(3001, () => {
    console.log("Server is Running on 3001");
});
