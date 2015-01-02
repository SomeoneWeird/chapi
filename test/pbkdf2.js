
"use strict";

var assert = require("assert");

var chapi = require("../");

describe("pbkdf2", function() {
  
  it("should hash string", function(done) {

    chapi("pbkdf2").hash("string", function(err, hash) {

      assert.ifError(err);

      assert.notEqual(hash, undefined);

      done();

    });

  });

  it("should verify hash properly", function(done) {

    chapi("pbkdf2").hash("string", function(err, hash) {

      assert.ifError(err);

      chapi("pbkdf2").compare("string", hash, function(err, match) {

        assert.ifError(err);

        assert.equal(match, true);

        done();

      });

    });

  });

});