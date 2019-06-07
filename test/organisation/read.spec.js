const { addOrganisation } = require("../test-helpers");
const supertest = require("supertest");
const should = require("should");

const server = supertest.agent("http://localhost:8080");
describe("readOrganisation", function() {
  it("should return the organisation with the passed Id", function(done) {
    addOrganisation().end(function(err, res) {
      server
        .get(`/organisations/${res.body._id}`)
        .set("Accept", "application/json")
        .expect(200)
        .end(function(err, res) {
          res.statusCode.should.equal(200);
          res.body.name.should.equal("Financial Times");
          done();
        });
    });
  });

  it("should 404 when can't find id", function(done) {
    server
      .get(`/organisations/5cfaa1bd09152353b4e1493b`)
      .set("Accept", "application/json")
      .expect(404)
      .end(function(err, res) {
        res.statusCode.should.equal(404);
        done();
      });
  });
});
