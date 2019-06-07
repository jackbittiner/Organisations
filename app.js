const express = require("express");
const bodyParser = require("body-parser");
const organisationController = require("./controllers/organisation-controller");

require("./database/db");

const app = express();

const port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.route("/organisations").post(organisationController.createOrganisation);

app
  .route("/organisations/:organisationid")
  .delete(organisationController.deleteOrganisation);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
