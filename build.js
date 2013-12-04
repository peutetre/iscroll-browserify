var FS = require("q-io/fs");

FS.copy('./node_modules/iscroll/build/iscroll.js', './index.js')
  .then(function () {
    FS.append('./index.js', "\n\nmodule.exports = IScroll;\n");
  });
