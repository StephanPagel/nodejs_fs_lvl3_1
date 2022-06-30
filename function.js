const fs = require("fs");

// const takeParam = (param) => {
//   return param;
// };

const checkFile = (path, param) => {
  if (fs.existsSync(path)) {
    fs.appendFile("./assets/text.txt", "\n" + param, (err) => {
      if (err) {
        throw err;
      }
      console.log('Text wurde zur Datei "text.txt" hinzugefügt.');
    });
  } else {
    fs.writeFile("./assets/text.txt", param, (err) => {
      if (err) {
        throw err;
      }
      console.log('Datei "text.txt" wurde erstellt.');
    });
  }
};

module.exports = {
  //   takeParam,
  checkFile,
};
