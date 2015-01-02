
"use strict";

var assert = require("assert");

var chapi = require("../");

describe("scrypt", function() {
  
  it("should hash string", function(done) {

    chapi("scrypt").hash("string", function(err, hash) {

      assert.ifError(err);

      assert.notEqual(hash, undefined);

      done();

    });

  });

  it("should verify hash properly", function(done) {

    chapi("scrypt").hash("string", function(err, hash) {

      assert.ifError(err);

      chapi("scrypt").compare("string", hash, function(err, match) {

        assert.ifError(err);

        assert.equal(match, true);

        done();

      });

    });

  });

});