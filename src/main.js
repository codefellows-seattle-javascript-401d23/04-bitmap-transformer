'use strict';

const fs = require('fs');
const parseBitmap = require('./lib/parse-bitmap');


fs.readFile(`${__dirname}/assets/house.bmp`, (error, buffer) => { 
  if (error) {
    throw error;
  }
  parseBitmap.parse(buffer);
});