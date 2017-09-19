/**
 * Created by Zhang Peng on 2017/6/12.
 */
const fs = require('fs');
const path = require('path');
const colors = require('colors/safe');
const spawnSync = require('child_process').spawnSync;

const demoDirs = fs.readdirSync(__dirname).filter((file) => {
  return fs.statSync(path.join(__dirname, file)).isDirectory()
});

let cmdArgs = [
  { cmd: 'webpack', args: [] }
];

const build = function (demoDirs) {
  for (const dir of demoDirs) {

    // 跳过 node_modules 目录
    if (dir === "node_modules" || dir === "demo00") {
      continue;
    }

    // 打印开始编译信息
    console.log(colors.green.bold.underline("Start building ") + colors.yellow.bold.underline(dir));

    for (const cmdArg of cmdArgs) {
      // declare opts in this scope to avoid https://github.com/joyent/node/issues/9158
      const opts = {
        cwd: path.join(__dirname, dir),
        stdio: 'inherit',
        encoding: 'utf8'
      };

      let result = {};
      if (process.platform === 'win32') {
        result = spawnSync(cmdArg.cmd + '.cmd', cmdArg.args, opts)
      } else {
        result = spawnSync(cmdArg.cmd, cmdArg.args, opts)
      }

      // 打印编译失败信息
      if (result.status !== 0) {
        console.log(colors.red.bold.underline("\nBuilding error.\n"));
        return;
      }
    }
  }

  // 打印编译成功信息
  console.log(colors.green.bold.underline("\nBuilding success..."));
};

build(demoDirs);

