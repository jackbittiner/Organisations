const { addOrganisation } = require("../test-helpers");
const supertest = require("supertest");
const should = require("should");

const server = supertest.agent("http://localhost:8080");
describe("createOrganisation", function() {
  it("should return the created organisation with statusCode 201", function(done) {
    addOrganisation().end(function(err, res) {
      res.statusCode.should.equal(201);
      res.body.name.should.equal("Financial Times");
      done();
    });
  });
  it("should return 500 if improper params sent", function(done) {
    server
      .post("/organisations")
      .send({
        name: "Financial Times",
        yearFounded: 1888,
        wrongParam: "This is very wrong"
      })
      .set("Accept", "application/json")
      .expect(500)
      .end(function(err, res) {
        res.statusCode.should.equal(500);
        done();
      });
  });
});
