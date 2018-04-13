var chalk = require("chalk");

var message = "Hello " + chalk.yellow("World");
console.log(message);
console.log(chalk.red("hello", chalk.underline.bgBlue("world")))