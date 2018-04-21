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
      let parsedBitmap = null;
      parsedBitmap = parseBitmap.parse(error, data);
      if (transform === 'monochrome') {
        monoChrome.transform(writePath, parsedBitmap[0]);
      }
    }
  });

  fs.writeFile(writePath, parsedBitmap[1], (err) => {
    if (err) throw err;
    console.log('new file saved');
  });

};

fileReader('./src/__test__/asset/test.bmp', './src/__test__/asset/test.bmp', 'monochrome');
