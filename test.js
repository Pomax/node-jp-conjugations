var verbs = require("./index"),
    lodash = require("lodash");

function test(test, match) {
  if(!lodash.isEqual(test, match))
  	exit(1);
}

function formHTML(verb) {
  return [
    "<html>",
    "<head>",
    "<meta charset='utf8'>",
    "</head>",
    "<body>",
    "<script type='text/json'>",
    JSON.stringify(verbs.unconjugate(verb), false, 2),
    "</script>",
    "</body>",
    "</html>"
  ].join("\n");

}

var fs = require("fs");
//fs.writeFileSync("test.html", formHTML("させます"), "utf-8");
fs.writeFileSync("test.html", formHTML("あそんでいます"), "utf-8");

