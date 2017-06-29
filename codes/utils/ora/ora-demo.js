/**
 * Created by Administrator on 2017/6/29.
 */
const Ora = require('ora');

const spinner = new Ora({
  text: 'Loading unicorns',
  spinner: process.argv[2]
});

spinner.start("Start the spinner. Returns the instance. Set the current text if text is provided.");

setTimeout(() => {
  spinner.color = 'yellow';
  spinner.text = 'Loading rainbows';
}, 1000);

setTimeout(() => {
  spinner.succeed("Stop the spinner, change it to a green ✔ and persist the current text, or text if provided. Returns the instance. See the GIF below.");
  spinner.fail("Stop the spinner, change it to a red ✖ and persist the current text, or text if provided. Returns the instance. See the GIF below.");
  spinner.warn("Stop the spinner, change it to a yellow ⚠ and persist the current text, or text if provided. Returns the instance.");
  spinner.info("Stop the spinner, change it to a blue ℹ and persist the current text, or text if provided. Returns the instance.");
  spinner.stop("Stop and clear the spinner. Returns the instance.");
  spinner.stopAndPersist("Stop the spinner and change the symbol or text. Returns the instance. See the GIF below.");
}, 3000);
