var verbs = require("./index"),
    lodash = require("lodash");

function test(test, match) {
  if(!lodash.isEqual(test, match))
  	exit(1);
}

// no tests at the moment
console.log(verbs.conjugate("みる", "v1"));
console.log(verbs.conjugate("みる"));

console.log(verbs.unconjugate("みられる", "v1"));
console.log(verbs.unconjugate("いかされている"));

console.log("no errors");
