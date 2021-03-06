const express = require("express");
const bodyParser = require("body-parser");
const {
  createOrganisation,
  deleteOrganisation,
  readOrganisation,
  updateOrganisation,
  getAllOrganisations
} = require("./controllers/organisation-controller");
const cors = require("cors");

require("./database/db");

const app = express();

const port = process.env.PORT || 8080;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app
  .route("/organisations")
  .get(getAllOrganisations)
  .post(createOrganisation);

app
  .route("/organisations/:organisationid")
  .get(readOrganisation)
  .put(updateOrganisation)
  .delete(deleteOrganisation);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
