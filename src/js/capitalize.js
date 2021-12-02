let fs = require('fs');
let path = require('path');
var arr = [];

fs.readFile(path.resolve('src/js/file.csv'), 'utf8',
  (err, data) => {

    arr = data.split('\r\n');

    for (let i = 1; i < arr.length; i++) {
      let word = "";
      for (let j = 0; j < arr[i].length; j++) {
        const change = !!Math.floor(Math.random() * 2);
        let letter = arr[i][j];

        if (letter < 'Z') {
          if (change) {
            letter = letter.toLowerCase();
          }
        } else {
          if (change) {
            letter = letter.toUpperCase();
          }
        }
        word += letter;
      }
      arr[i] = word;
    }

    console.log(arr);

  });
