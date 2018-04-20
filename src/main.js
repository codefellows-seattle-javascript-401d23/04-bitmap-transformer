'use strict'

const fs = require('fs');
const parseBitmap = require('./lib/parse-bitmap');
// const testBuffer = Buffer.from('My cat is cute too.');
// console.log(testBuffer.toString());

fs.readFile(`${__dirname}/assets/house.bmp`, (error, buffer) => {
  if (error) {
    throw error;
  }
  const parsedBitmap = parseBitmap.parse(buffer);
  console.log(parsedBitmap);
});
