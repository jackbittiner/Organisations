const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrganisationSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  yearFounded: {
    type: Number,
    required: true
  },
  revenue: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model("Organisations", OrganisationSchema);
