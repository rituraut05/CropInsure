var mongoose = require("mongoose");

var ContractSchema = new mongoose.Schema({
  farmer_id : mongoose.Schema.Types.ObjectId,
  farmer_ethaddress: String,
  insurer_ethaddress: String,
  paid: Boolean,
  creationdate: String,
  premium: String,
  damage: String,
  farm_details: {
    district: String,
    village: String,
    survey: String,
    farm_area: String
  },
  crop_details: {
    crop_name: String,
    date_of_sowing: String,
    area_sown: String,
    season: String
  },
  bank_detail:{
    account_no: String,
    ifsc_code: String,
    branch_name: String
  }
});

module.exports = mongoose.model('Contract', ContractSchema);