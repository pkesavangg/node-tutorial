// Modules
// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require("./4-name");
const sayHi = require("./5-utils");
const data = require('./6-alternate-flavor');
require('./7-mind-gerande')
sayHi("John")
sayHi('Jessica')
sayHi(names.peter)

console.log(names.peter)