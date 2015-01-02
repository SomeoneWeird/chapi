
"use strict";

var bcrypt = require("bcrypt");

module.exports = function(options) {

  options = options || {};
  
  var iterations = options.iterations || 10;

  var hash = function(str, callback) {
    bcrypt.hash(str, iterations, callback);
  };

  var compare = function(str, hash, callback) {
    bcrypt.compare(str, hash, callback);
  };

  return {
    hash:    hash,
    compare: compare
  };

}
