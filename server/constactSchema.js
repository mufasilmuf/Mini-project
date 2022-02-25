const mongoose = require("mongoose");

const dataSchema = mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phoneNo: { type: Number, required: true },
  address: { type: String, required: true },
  accountName: { type: String, required: true },
  accountNo: { type: Number, required: true },
});

module.exports = mongoose.model("data", dataSchema);
