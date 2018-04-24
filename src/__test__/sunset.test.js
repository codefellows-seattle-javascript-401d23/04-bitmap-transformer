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
  return fs.readFile(files[0], (err1, data1) => {
    mockData.push(data1);
    return fs.readFile(files[1], (err2, data2) => {
      mockData.push(data2);
      return fs.readFile(files[2], (err3, data3) => {
        mockData.push(data3);
        done();
      });
    });
  });
});

beforeAll((done) => {
  return fs.readFile(transformFiles[0], (err1, data1) => {
    transformArray.push(data1);
    return fs.readFile(transformFiles[1], (err2, data2) => {
      transformArray.push(data2);
      return fs.readFile(transformFiles[2], (err3, data3) => {
        transformArray.push(data3);
        done();
      });
    });
  });
});
  
describe('testing image transform function', () => {
  it('should transform an image to be orangified', () => {
    orangify.transform(mockData[0], (newData) => {
      console.log('new data: ', newData);
      expect(newData).toEqual(transformArray[0]);
    });
  });

  it('should transform an image to be nightvision', () => {
    nightVision.transform(mockData[0], (newData) => {
      console.log('new data: ', newData);
      expect(newData).toEqual(transformArray[2]);
    });
  });

  it('should transform an image to be sunset', () => {
    sunset.transform(mockData[0], (newData) => {
      console.log('new data: ', newData);
      expect(newData).toEqual(transformArray[1]);
    });
  });
});
