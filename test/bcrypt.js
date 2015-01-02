
"use strict";

var assert = require("assert");

var chapi = require("../");

describe("bcrypt", function() {
  
  it("should hash string", function(done) {

    chapi("bcrypt").hash("string", function(err, hash) {

      assert.ifError(err);

      assert.notEqual(hash, undefined);

      done();

    });

  });

  it("should verify hash properly", function(done) {

    chapi("bcrypt").hash("string", function(err, hash) {

      assert.ifError(err);

      chapi("bcrypt").compare("string", hash, function(err, match) {

        assert.ifError(err);

        assert.equal(match, true);

        done();

      });

    });

  });

});