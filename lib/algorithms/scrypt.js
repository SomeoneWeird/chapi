
"use strict";

var scrypt = require("scrypt");

module.exports = function(options) {

  options = options || {};
  
  var maxTime = options.maxTime || 0.2;

  var params = scrypt.params(maxTime);

  scrypt.hash.config.keyEncoding = "ascii";

  var hash = function(str, callback) {
    scrypt.passwordHash(str, params, callback);
  };

  var compare = function(str, hash, callback) {
    scrypt.verifyHash(hash, str, callback);
  };

  return {
    hash:    hash,
    compare: compare
  };

}
