const { checkFile } = require("./function");
const fs = require("fs");

const path = "./assets/text.txt";
const param = "Test";

console.log(checkFile(path, param));
