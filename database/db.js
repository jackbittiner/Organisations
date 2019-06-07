const mongoose = require("mongoose");

const database = process.env.NODE_ENV === "test" ? "testdatabase" : "test";

const dbURI = `mongodb+srv://user:drowssap@financialtechtesttimes-qimzj.mongodb.net/${database}?retryWrites=true&w=majority`;

console.log(dbURI);

const options = {
  reconnectTries: Number.MAX_VALUE,
  poolSize: 10
};

mongoose.connect(dbURI, options).then(
  () => {
    console.log("Database connected!");
  },
  err => {
    console.log("Error connecting to database: ", err);
  }
);

require("../models/organisation");
