
"use strict";

var crypto = require("crypto");

module.exports = function(options) {
  
  options = options || {};
  
  var saltLength = options.saltLength || 20;

  var hash = function(str, callback) {

    crypto.randomBytes(saltLength / 2, function(err, bytes) {

      if(err) {
        return callback(err);
      }

      var salt = bytes.toString("hex");

      var hash = salt + "$" + crypto.createHash("sha256").update(str + salt).digest("hex");

      return callback(null, hash);

    });

  };

  var compare = function(str, hash, callback) {

    var tmp = hash.split("$");

    var hash = crypto.createHash("sha256").update(str + tmp[0]).digest("hex");

    return callback(null, hash === tmp[1]);

  };

  return {
    hash:    hash,
    compare: compare
  };

}