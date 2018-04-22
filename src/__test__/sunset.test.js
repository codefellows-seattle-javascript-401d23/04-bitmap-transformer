'use strict';

const fs = require('fs');
const fileReader = require('../lib/main.js');

const orangify = require('../lib/orangify');
const invert = require('../lib/invert');
const nightVision = require('../lib/nightVision');
const sunset = require('../lib/sunset');

const files = [
  `${__dirname}/asset/test1.bmp`,
  `${__dirname}/asset/test2.bmp`,
  `${__dirname}/asset/test3.bmp`,
];

const transformFiles = [
  `${__dirname}/asset/orangify.bmp`,
  `${__dirname}/asset/sunset.bmp`,
  `${__dirname}/asset/nightvision.bmp`,
];

const mockData = [];
const transformArray = [];

beforeAll((done) => {
  return fs.readFile(files[0], 'utf8', (err1, data1) => {
    mockData.push(data1);
    return fs.readFile(files[1], 'utf8', (err2, data2) => {
      mockData.push(data2);
      return fs.readFile(files[2], 'utf8', (err3, data3) => {
        mockData.push(data3);
        done();
      });
    });
  });
});

beforeAll((done) => {
  return fs.readFile(transformFiles[0], 'utf8', (err1, data1) => {
    transformArray.push(data1);
    return fs.readFile(transformFiles[1], 'utf8', (err2, data2) => {
      transformArray.push(data2);
      return fs.readFile(transformFiles[2], 'utf8', (err3, data3) => {
        transformArray.push(data3);
        done();
      });
    });
  });
});
  
describe('testing image transform function', () => {
  it('should transform an image to be orangified', () => {
    orangify.transform(files[0], (newData) => {
      expect(newData).toEqual(transformArray[0]);
    });
  });


//   it('should be a bm', () => {
//     const header = mockData[0].toString('utf8', 0, 2);
//     expect(header).toEqual('BM');
//   });
});
