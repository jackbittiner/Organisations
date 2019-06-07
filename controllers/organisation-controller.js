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

module.exports = {
  createOrganisation
};
