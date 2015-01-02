
"use strict";

var crypto = require("crypto");

module.exports = function(options) {
  
  options = options || {};
  
  var iterations = options.iterations || 10000;
  var keyLength  = options.keyLength  || 24;

  var hash = function(str, callback) {

    crypto.randomBytes(20, function(err, bytes) {

      if(err) {
        return callback(err);
      }

      var salt = bytes.toString("hex");

      crypto.pbkdf2(str, salt, iterations, keyLength, function(err, hash) {

        if(err) {
          return callback(err);
        }

        hash = salt + "$" + iterations + "$" + keyLength + "$" + hash.toString("hex");

        return callback(null, hash);

      });

    });

  };

  var compare = function(str, hash, callback) {

    var tmp = hash.split("$");

    crypto.pbkdf2(str, tmp[0], parseInt(tmp[1]), parseInt(tmp[2]), function(err, hash) {

      if(err) {
        return callback(err);
      }

      return callback(null, tmp[3] === hash.toString("hex"));

    });

  };

  return {
    hash:    hash,
    compare: compare
  };

}