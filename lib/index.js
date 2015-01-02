
"use strict";

var crypto = require("crypto");
var path   = require("path");

/*

 var chapi = require("chapi");

 var algorithm = "bcrypt";

 // One of:

 chapi(algorithm, ..)
 chapi[algorithm](..);

*/

var algorithms = {
  bcrypt: require(path.resolve(__dirname, "algorithms/bcrypt")),
  pbkdf2: require(path.resolve(__dirname, "algorithms/pbkdf2")),
  scrypt: require(path.resolve(__dirname, "algorithms/scrypt")),
  sha256: require(path.resolve(__dirname, "algorithms/sha256"))
}

var chapi = function(algo, options) {

  if(!algorithms[algo]) {
    throw new Error("Unknown algorithm: " + algo);
  }

  return algorithms[algo](options);

}

for(var algo in algorithms) {
  chapi[algo] = chapi.bind(null, algo);
}

module.exports = chapi;
