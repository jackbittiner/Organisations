const express = require("express");
const bodyParser = require("body-parser");
const {
  createOrganisation,
  deleteOrganisation,
  readOrganisation,
  updateOrganisation
} = require("./controllers/organisation-controller");

require("./database/db");

const app = express();

const port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.route("/organisations").post(createOrganisation);

app
  .route("/organisations/:organisationid")
  .get(readOrganisation)
  .put(updateOrganisation)
  .delete(deleteOrganisation);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
