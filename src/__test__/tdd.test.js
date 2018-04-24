import { fstat } from "fs";

'use strict'

const fs = require('fs');

describe('Testing dim.js',()=>{
    let resultFile;
    let initialFile;
    fs.readFile( // Vinicio - readFile is an async operation
        `${__dirname}/__test__/asset/${process.argv[3]}.bmp`,
        (error, fileBuffer) => { // [?]
          if (error) {
            throw error;
          }
          initialFile=fileBuffer;
        },
      );
    fs.readFile( // Vinicio - readFile is an async operation
        `${__dirname}/__test__/asset/${process.argv[2]}.bmp`,
        (error, fileBuffer) => { // [?]
          if (error) {
            throw error;
          }
          resultFile=fileBuffer;
        },
      );
      expect(resultFile[151]).toEqual(initialFile[151]/2);
});

describe('Testing intensify.js',()=>{

});

describe('Testing invert.js',()=>{

});

describe('Testing random.js',()=>{

});