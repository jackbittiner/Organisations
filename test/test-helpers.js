const supertest = require("supertest");

const server = supertest.agent("http://localhost:8080");

function addOrganisation() {
  return server
    .post("/organisations")
    .send({ name: "Financial Times", yearFounded: 1888, revenue: 1000000 })
    .set("Accept", "application/json")
    .expect(201);
}

module.exports = {
  addOrganisation: addOrganisation
};
