const Organisation = require("../models/organisation");

const createOrganisation = (req, res) => {
  Organisation.create(req.body, (err, organisation) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.status(201).json(organisation);
  });
};

const readOrganisation = (req, res) => {
  Organisation.findById(req.params.organisationid, (err, organisation) => {
    if (err) {
      return res.status(500).send(err);
    }
    if (!organisation) {
      return res
        .status(404)
        .send("Couldn't find an organisation with that Id!");
    }
    res.status(200).json(organisation);
  });
};

const updateOrganisation = (req, res) => {
  Organisation.findOneAndUpdate(
    { _id: req.params.organisationid },
    req.body,
    { new: true },
    (err, organisation) => {
      if (err) {
        return res.status(500).send(err);
      }
      if (!organisation) {
        return res
          .status(404)
          .send("Couldn't find an organisation with that Id!");
      }
      res.status(200).json(organisation);
    }
  );
};

const deleteOrganisation = (req, res) => {
  Organisation.findByIdAndRemove(
    req.params.organisationid,
    (err, organisation) => {
      if (err) {
        return res.status(500).send(err);
      }
      if (!organisation) {
        return res
          .status(404)
          .send("Couldn't find an organisation with that Id!");
      }
      res
        .status(200)
        .json({ message: `${organisation.name} successfully deleted` });
    }
  );
};

module.exports = {
  createOrganisation: createOrganisation,
  readOrganisation: readOrganisation,
  updateOrganisation: updateOrganisation,
  deleteOrganisation: deleteOrganisation
};
