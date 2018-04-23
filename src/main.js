'use strict';

const fs = require('fs');
const parseBitmap = require('./lib/bitmap-parser');
// const flipBitmap = require('./lib/bitmap-flipper');
// const reverseBitmap = require('./lib/bitmap-reverser');
const colorBitmap = require('./lib/bitmap-colorer');

fs.readFile(`${__dirname}/assets/house.bmp`, (errorRead, buffer) => {
  if (errorRead) throw errorRead;
  console.log(buffer);  
  const parsedBitmap = parseBitmap.parse(buffer);
  // const parsedBitmap2 = parseBitmap.parse(buffer);
  console.log('Starting Color Transformation!');
  const newData = colorBitmap.invertColor(parsedBitmap);
  fs.writeFile(`${__dirname}/__test__/test-assets/transformedHouse.bmp`, newData.allData);
  // const newData2 = flipBitmap.flip(parsedBitmap2);
  // fs.writeFile(`${__dirname}/__test__/test-assets/transformedHouse2.bmp`, newData2.allData);
  
  // Sean - Will use reverse transformation on image saved and updated in test file
  // return fs.writeFile(`${__dirname}/__test__/test-assets/transformedHouse.bmp`, buffer, (errorReverse) => {
  //   if (errorReverse) throw errorReverse;
  //   const coloredBitmap = colorBitmap.invertColor(parsedBitmap);
  //   console.log('Color BMP saved!\n');
  //   console.log('Starting Flip Transformation!');
  //   // Sean - Will create new file in test with original BMP image
  //   return fs.writeFile(`${__dirname}/__test__/test-assets/transformedHouse.bmp`, buffer, (errorWrite) => {
  //     if (errorWrite) throw errorWrite;
  // flipBitmap.flip(coloredBitmap);   
  // console.log('Flip BMP saved!\n');
  // // Sean - Will use flip transformation on image saved in test file
  // return fs.writeFile(
  //   `${__dirname}/__test__/test-assets/transformedHouse.bmp`,
  //   buffer, (errorFLip) => {
  //     if (errorFLip) throw errorFLip;
  //     console.log('All transformation are done!');
  //   },
  // );
  //   });
  // });
});
