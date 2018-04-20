'use strict';

// console.log(process.argv);

const fs = require('fs');
const parseBitmap = require('./lib/parse-bitmap');
// const testBuffer = Buffer.from('sometestfilehere');



//  use fs to read a bitmap file...
fs.readFile(`${__dirname}/__test__/assets/house.bmp`, (error, buffer) => {
  if (error) {
    throw error;
  }
  parseBitmap.parse(buffer);
});
