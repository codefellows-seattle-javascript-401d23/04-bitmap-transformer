'use strict';

// import { fstat } from 'fs';

const fs = require('fs');
const dim = require('../lib/dim');

describe('Testing dim.js', () => {
  let resultFile;
  let initialFile;
  fs.readFile( 
    `${__dirname}/__test__/asset/${process.argv[3]}.bmp`,
    (error, fileBuffer) => { // [?]
      if (error) {
        throw error;
      }
      initialFile = fileBuffer;
    },
  );
  fs.readFile( 
    `${__dirname}/__test__/asset/${process.argv[2]}.bmp`,
    (error, fileBuffer) => { // [?]
      if (error) {
        throw error;
      }
      resultFile = fileBuffer;
    },
  );
  expect(dim(resultFile[151])).toEqual(initialFile[151 / 2]);
});

describe('Testing intensify.js', () => {

});

describe('Testing invert.js', () => {

});

describe('Testing random.js', () => {

});
