/**
 * Created by victor zhang on 2017/6/12.
 */
const cp = require('child_process');
const path = require("path");
const fs = require("fs");

const cmds = fs.readdirSync(__dirname).filter(function (dirname) {
  return fs.statSync(path.join(__dirname, dirname)).isDirectory() && dirname !== "node_modules";
}).sort().map(function (dirname) {
  return "cd " + dirname + " && webpack";
});

let stack = function () {
  console.log("done");
};
for (let i = cmds.length - 1; i >= 0; i--) {
  const cmd = cmds[i];
  stack = (function (next, cmd) {
    return function () {
      console.log(cmd);
      cp.exec(cmd, function (error, stdout, stderr) {
        if (error) console.error(error);
        else if (stderr) console.error(stderr), next();
        else next();
      });
    }
  }(stack, cmd));
}
stack();
