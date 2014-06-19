module.exports = function( grunt ) {
  "use strict";

  grunt.initConfig({
    pkg: grunt.file.readJSON( "package.json" ),
    jshint: {
      options: {
        "laxbreak": true,
        "laxcomma": true,
        "-W069": true   // thing["property"] is better written in dot notation
      },
      files: [
        "Gruntfile.js",
        "index.js",
      ]
    }
  });

  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.registerTask("default", ["jshint"]);
};
