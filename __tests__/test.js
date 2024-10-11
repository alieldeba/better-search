const { searchInString, searchInArray } = require("../dist/index");

console.log(searchInString("Ale", "ali", { lowercase: false })); // false
console.log(searchInString("Ale", "ali")); // true

console.log(searchInString("ale", "ali")); // true
console.log(searchInArray(["ali", "ale", "ذياد"], "زياد")); // [ 'ذياد' ]
