/**
 * Created by victor zhang on 2017/6/21.
 */
const fs = require('fs');
const path = require('path');
const colors = require('colors/safe');
const spawnSync = require('child_process').spawnSync;

/*命令列表（含参数）*/
let cmdArgs = [
  { cmd: 'webpack', args: [] }
];

const BASIC_PATH = __dirname + "/basic";
const ADVANCED_PATH = __dirname + "/advanced";

/*获取 parent 目录下的子目录列表*/
getDirs = (parent) => {
  return fs.readdirSync(parent).filter((file) => {
    return fs.statSync(path.join(parent, file)).isDirectory()
  });
};

/*在 parent 目录的所有子目录下执行 cmdArgs 中的命令*/
build = (parent) => {
  const dirs = getDirs(parent);

  for (const dir of dirs) {

    // 打印开始编译信息
    console.log(colors.green.bold.underline("Start building ") + colors.yellow.bold.underline(parent + "/" + dir));

    for (const cmdArg of cmdArgs) {
      // declare opts in this scope to avoid https://github.com/joyent/node/issues/9158
      const opts = {
        cwd: path.join(parent, dir),
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

build(BASIC_PATH);
build(ADVANCED_PATH);

