// Import chalk module (v4 uses CommonJS)
const chalk = require('chalk');

// Basic color outputs
console.log(chalk.blue('Hello, World!'));
console.log(chalk.yellow('Learning Chalk is fun!'));

// Background color styling
console.log(chalk.bgYellow.black('Warning! Proceed with caution.'));
console.log(chalk.bgRed.white('Error! Something went wrong.'));

// Multiple color in same output
console.log(chalk.green('Success:') + chalk.white(' Operation completed!'));
console.log(chalk.cyan('Loading...') + chalk.magenta(' Please wait'));

// Custom theme functions
const error = chalk.bold.red;
const warning = chalk.bold.hex('#FFA500'); // Orange using HEX
const success = chalk.bold.green;

// Using themes
console.log(error('Error: Unable to connect to the server!'));
console.log(warning('Warning: Low disk space!'));
console.log(success('Success: Data saved successfully!'));

// Bonus: Text effects & RGB
console.log(chalk.underline.italic('This is underlined and italic!'));
console.log(chalk.rgb(123, 45, 67).inverse('Using RGB coloring!'));
