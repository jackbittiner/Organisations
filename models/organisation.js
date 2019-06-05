const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrganisationSchema = new Schema({
  Name: {
    type: String,
    required: true
  },
  YearFounded: {
    type: Number,
    required: true
  },
  Revenue: {
    type: Number,
    required: true
  },
});

module.exports = mongoose.model("Organisations", OrganisationSchema);