var converter = require("./index"),
    lodash = require("lodash");

function test(test, match) {
  if(!lodash.isEqual(test, match))
  	exit(1);
}

// no tests at the moment

console.log("no errors");
