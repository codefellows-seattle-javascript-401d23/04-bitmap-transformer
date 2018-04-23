'use strict';

const flipBitmap = module.exports = {};

// // Sean - Take out after testing
// const fs = require('fs');
// const parseBitmap = require('./bitmap-parser');

flipBitmap.flip = (parsedBuffer) => {
  // Sean - TODO: Add error Checks
  const pixalTableBuffer = parsedBuffer.pixalTable;
  pixalTableBuffer.reverse();
  return parsedBuffer;
};

// // Sean - Take out after testing
// fs.readFile(`${__dirname}/../assets/house.bmp`, (errorRead, buffer) => {
  // let counter = 0;
  // while (counter < pixalTableBuffer.length - [counter + 1]) {
  //   const temp = pixalTableBuffer[counter];
  //   pixalTableBuffer[counter] = pixalTableBuffer[pixalTableBuffer.length - [counter + 1]];
  //   pixalTableBuffer[pixalTableBuffer.length - [counter + 1]] = temp;
  //   counter += 1;
  // }
  // const parsedFlipTranformation = parsedBuffer;
  // console.log(
  //   'This is the flip pixal table:\n', parsedFlipTranformation.pixalTable,
  //   '\nThis is the last index of flip pixal table:\n', 
  //   parsedFlipTranformation.pixalTable[(parsedFlipTranformation.pixalTable.length - 1)],
  // );
  // console.log('This is the flip: \n', parsedFlipTranformation);
//   if (errorRead) throw errorRead;
//   const parsedBitmap = parseBitmap.parse(buffer);
//   return fs.appendFile(`${__dirname}/../__test__/test-assets/transformedHouse.bmp`, buffer, (errorWrite) => {
//     if (errorWrite) throw errorWrite;
//     flipBitmap.flip(parsedBitmap);
//     console.log('Flip BMP saved!');
//     return fs.writeFile(`${__dirname}/../__test__/test-assets/transformedHouse.bmp`, buffer, (errorFLip) => {
//       if (errorFLip) throw errorFLip;
//     });
//   });
// });
