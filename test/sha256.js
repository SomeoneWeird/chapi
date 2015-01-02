
"use strict";

var assert = require("assert");

var chapi = require("../");

describe("sha256", function() {
  
  it("should hash string", function(done) {

    chapi("sha256").hash("string", function(err, hash) {

      assert.ifError(err);

      assert.notEqual(hash, undefined);

      done();

    });

  });

  it("should verify hash properly", function(done) {

    chapi("sha256").hash("string", function(err, hash) {

      assert.ifError(err);

      chapi("sha256").compare("string", hash, function(err, match) {

        assert.ifError(err);

        assert.equal(match, true);

        done();

      });

    });

  });

});