const { addOrganisation } = require("../test-helpers");
const supertest = require("supertest");
const should = require("should");

const server = supertest.agent("http://localhost:8080");
describe("updateOrganisation", function() {
  it("should return the updated organisation", function(done) {
    server;
    addOrganisation().end(function(err, res) {
      server
        .put(`/organisations/${res.body._id}`)
        .send({ name: "Something Else" })
        .set("Accept", "application/json")
        .expect(200)
        .end(function(err, res) {
          res.statusCode.should.equal(200);
          res.body.name.should.equal("Something Else");
          done();
        });
    });
  });

  it("should 404 when can't find id", function(done) {
    server
      .put(`/organisations/5cfaa1bd09152353b4e1493b`)
      .set("Accept", "application/json")
      .expect(404)
      .end(function(err, res) {
        res.statusCode.should.equal(404);
        done();
      });
  });
});
