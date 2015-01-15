**chapi**
=====

*What is it?*
-----------

Chapi provides a compatible API for different hashing algorithms.

*API*
---- 

Chapi provides two ways of accessing hashing functions, you can use it as a function, or an object.

The function signature looks like this:

```js
function(algorithm, options);
```

The other way of using it, is accessing the property name of the algorithm you would like to use, that property is a function which you can pass an optional configuration object to. Like this:

```js
chapi.bcrypt()
```


----------

Each hashing API provides 2 functions, being `hash` and `compare`.

#### hash(str, callback) ####

The hash function takes a string, and a callback. It performs the actually computation of the hash of `str` and stores any needed information in the hash you get back.

The signature of the callback you pass should be `function(err, hash)`

#### compare(str, hash, callback ####

The compare function takes a string, a hash, and a callback. It calculates the hash of `str` (using the options from `hash`, if necessary) and compares it to `hash`.

The signature of the callback you pass should be `function(err, match)`

*Example*
-------

#### Hashing ####
```js

var chapi = require("chapi");
var async = require("async");

var algorithms = [ "bcrypt", "pbkdf2", "scrypt", "sha256" ];

var data = "hello world! so original.";

// Iterate over each algorithm in array
async.map(algorithms, function(algorithm, done) {
  // Call the `hash` function and pass in data & callback
  chapi[algorithm]().hash(data, done);
}, function(err, hashes) {
  
  // Check for errors..
  if(err) {
    return console.error("Error hashing:", err);
  }

  console.log("Hashes:", hashes);

  // Hashes contains the uniquely hashed string using each algorithm.
  
});

```

#### Verification ####
```js
var chapi = require("chapi");

var plaintext = "omg not something random words";
var algorithm = "bcrypt";

chapi[algorithm].hash(plaintext, function(err, hash) {

  if(err) return console.error("Error hashing:", err);

  chapi[algorithm].compare(plaintext, hash, function(err, match) {
    
    if(err) return console.error("Error verifying:", err);

    console.log("Hash matched:", match);

  });

});
```

*License*
---------

See `LICENSE.md`