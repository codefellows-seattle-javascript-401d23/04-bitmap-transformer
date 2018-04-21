'use strict'

const fs = require('fs');
const parseBitmap = require('./lib/parse-bitmap');
const changeColors = require('./lib/invert-colors');


fs.readFile(`${__dirname}/assets/house.bmp`, (error, buffer) => {
  if (error) {
    throw error;
  }
  let bitmap = parseBitmap.parse(buffer);
  console.log(bitmap);

 // bitmap = changeColors.invert(buffer);

 // console.log(bitmap);
  fs.writeFile(`${__dirname}/assets/newHouse.bmp`, buffer, (err) => {
    if (err) throw err;
    console.log('buffer written to newHouse.bmp');
  });
});
