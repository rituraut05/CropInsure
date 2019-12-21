var mongoose = require("mongoose");

var FarmerSchema = new mongoose.Schema({
  name : String,
  phonenumber: String,
  address: String,
  contract_ids: [mongoose.Schema.Types.ObjectId],
});

module.exports = mongoose.model('Farmer', FarmerSchema);