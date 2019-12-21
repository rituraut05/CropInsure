var mongoose = require("mongoose");

var ModelTestDataSchema = new mongoose.Schema({
  service_name: String,
  model_definition_id : mongoose.Schema.Types.ObjectId,
  model_name: String,
  functionally_valid: mongoose.Schema.Types.Mixed,
  constraint_satisfying: mongoose.Schema.Types.Mixed,
  invalid: [mongoose.Schema.Types.Mixed]
});

module.exports = mongoose.model('ModelTestData', ModelTestDataSchema);