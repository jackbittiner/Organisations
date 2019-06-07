const Organisation = require("../models/organisation");

const createOrganisation = (req, res) => {
  let newOrganisation = new Organisation(req.body);
  newOrganisation.save((err, organisation) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(201).json(organisation);
  });
};

const deleteOrganisation = (req, res) => {
  Organisation.findByIdAndRemove(
    req.params.organisationid,
    (err, organisation) => {
      if (err || !organisation) {
        return res
          .status(404)
          .send(err || "Couldn't find an organisation with that Id!");
      }
      res
        .status(200)
        .json({ message: `${organisation.name} successfully deleted` });
    }
  );
};

module.exports = {
  createOrganisation: createOrganisation,
  deleteOrganisation: deleteOrganisation
};
