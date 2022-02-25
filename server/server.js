const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const PORT = 8000;
const app = express();

//middleware for cross origin resource sharing access...
app.use(cors());

//middleware to access the body data...
app.use(express.json());

//function to connect database mongodb...
(function connectDB() {
  mongoose.connect(
    "mongodb+srv://Mufeeth:mufeeth@movieappcluster.rdkf9.mongodb.net/mini-project?retryWrites=true&w=majority"
  );
  const db = mongoose.connection;
  db.once("open", () => {
    console.log("Successfully connected to DB");
  });
})();

//simple routes..
app.get("/", (req, res) => {
  res
    .status(200)
    .send({ message: "Welcome to backend for contact web application" });
});

const contact = require("./constactSchema");

//routes for contact..
app.post("/addData", async (req, res) => {
  try {
    const data = await new contact({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phoneNo: req.body.phoneNo,
      address: req.body.address,
      accountName: req.body.accountName,
      accountNo: req.body.accountNo,
    });

    data.save();
    res.status(201).send({ message: "Data added successfully" });
  } catch (err) {
    res.status(500).send({ message: err });
  }
});

//backend running code...
app.listen(PORT, () => {
  console.log(`Server running successfully on ${PORT}`);
});
