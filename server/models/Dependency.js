var mongoose = require("mongoose");

var DependencySchema = new mongoose.Schema({
  from_field: String,
  to_field: String,
  from_model: String,
  to_model: String,
  from_path: mongoose.Schema.Types.Mixed,
  to_path: mongoose.Schema.Types.Mixed
});

module.exports = mongoose.model('Dependency', DependencySchema);