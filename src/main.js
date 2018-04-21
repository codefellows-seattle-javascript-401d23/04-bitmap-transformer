const fs = require('fs');
const parseBitmap = require('./parseBitmap');
const monoChrome = require('./monoChrome');

// const parseBitmap = require('./lib/parse-bitmap');

// import { fstat } from "fs";


console.log('SUP');

const fileReader = (readPath, writePath, transform) => {
  fs.readFile(readPath, (error, data) => {
    if (error) {
      throw error;
    } else {
      console.log(data);

      if (transform === 'monochrome') {
        monoChrome.transform(data, (newData) => {
          fs.writeFile(writePath, newData, (err) => {
            if (err) throw err;
            console.log('new file saved');
          });
        });
      }
    }
  });
};

fileReader('./src/__test__/asset/test.bmp', './src/__test__/asset/test2.bmp', 'monochrome');
