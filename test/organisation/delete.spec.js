const { addOrganisation } = require("../test-helpers");
const supertest = require("supertest");
const should = require("should");

const server = supertest.agent("http://localhost:8080");
describe("deleteOrganisation", function() {
  it("should return a message with the deleted organisation", function(done) {
    server;
    addOrganisation().end(function(err, res) {
      server
        .delete(`/organisations/${res.body._id}`)
        .set("Accept", "application/json")
        .expect(200)
        .end(function(err, res) {
          res.body.message.should.equal("Financial Times successfully deleted");
          done();
        });
    });
  });

  it("should 404 when can't find id", function(done) {
    server
      .delete(`/organisations/5cfaa1bd09152353b4e1493b`)
      .set("Accept", "application/json")
      .expect(404)
      .end(function(err, res) {
        res.statusCode.should.equal(404);
        done();
      });
  });
});
