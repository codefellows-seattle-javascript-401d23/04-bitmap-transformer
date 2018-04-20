const fs = require('fs');
const parseBitmap = require('./parseBitmap');

// const parseBitmap = require('./lib/parse-bitmap');

// import { fstat } from "fs";


console.log('SUP');

fs.readFile(`${__dirname}/__test__/asset/test.bmp`, (error, data) => {
  if (error) {
    throw error;
  } else {
    console.log(data);
    parseBitmap.parse(error, data);
  }
});
