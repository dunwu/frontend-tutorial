/**
 * Created by Administrator on 2017/6/29.
 */
const chalk = require('chalk');
const log = console.log;

// Modifiers
log(chalk.reset('reset'));
log(chalk.bold('bold'));
log(chalk.dim('dim'));
log(chalk.italic('italic'));
log(chalk.underline('underline'));
log(chalk.inverse('inverse'));
log(chalk.hidden('hidden'));
log(chalk.strikethrough('strikethrough'));

// Colors
log(chalk.black('black'));
log(chalk.red('red'));
log(chalk.green('green'));
log(chalk.yellow('yellow'));
log(chalk.blue('blue'));
log(chalk.magenta('magenta'));
log(chalk.cyan('cyan'));
log(chalk.white('white'));
log(chalk.gray('gray'));

// Background colors
log(chalk.bgBlack('bgBlack'));
log(chalk.bgRed('bgRed'));
log(chalk.bgGreen('bgGreen'));
log(chalk.bgYellow('bgYellow'));
log(chalk.bgBlue('bgBlue'));
log(chalk.bgMagenta('bgMagenta'));
log(chalk.bgCyan('bgCyan'));
log(chalk.bgWhite('bgWhite'));

//  Multiple styles
log(chalk.green.underline.bold('Hello world!'));
log(chalk.yellow.bgRed.bold('Hello world!'));
