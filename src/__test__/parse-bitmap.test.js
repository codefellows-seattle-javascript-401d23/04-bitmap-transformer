'use strict';

const parseBitmap = require('../lib/parse-bitmap');
const magenta = require('../lib/transform/magenta');
const fs = require('fs');

const testAsset = `${__dirname}/asset/house.bmp`;

let testData = null;

beforeAll((done) => {
  fs.readFile(testAsset, (err1, data1) => {
    testData = data1;
    done();
  });
});

describe('Testing should return magenta', () => {
  test(('should return magenta'), () => {
    parseBitmap.parse(testData, (testBitmapObj) => {
      const testMagentaData = magenta.convertImage(testBitmapObj);
      parseBitmap.parse(testMagentaData, (magentaOutput) => {
        for (let i = 1; i < magentaOutput.colorTable.length; i += 4) {
          expect(magentaOutput.colorTable[i]).toEqual(0);
        }
      });
    });
  });
});
// describe('Testing should return midnight', () => {
//   test(('should return midnight'), () => {
//     parseBitmap.parse(testData, (testBitmapObj) => {
//       const testMidnightData = midnight.convertImage(testBitmapObj);
//       parseBitmap.parse(testMidnightData, (midnightOutput) => {
//         for (let i = 1; i < midnightOutput.colorTable.length; i += 4) {
//           expect(midnightOutput.colorTable[i]).toEqual(249);
          
//         }
//       });
//     });
//   });
// });
