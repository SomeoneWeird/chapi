
"use strict";

var scrypt = require("scrypt");

module.exports = function(options) {

  options = options || {};
  
  var maxTime = options.maxTime || 0.2;

  var params = scrypt.paramsSync(maxTime);

  var hash = function(str, callback) {
    scrypt.kdf(str, params, callback);
  };

  var compare = function(str, hash, callback) {
    scrypt.verifyKdf(hash, str, callback);
  };

  return {
    hash:    hash,
    compare: compare
  };

}
