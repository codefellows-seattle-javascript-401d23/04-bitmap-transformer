'use strict';

const transform = require('../lib/transform');
const fs = require('fs');
const logger = require('../lib/logger');
// const fileHandler = require('../lib/read-write');
// const parseBitmap = require('../lib/parse-bitmap');

const mockImage = `${__dirname}/assets/house.bmp`;

const mockData = [];

const testBuffer = {};

testBuffer.allData = fs.readFile(mockImage, (error, buffer) => {
  if (error) {
    logger.log(logger.ERROR, error);
  }
  return buffer;
});
mockData.push(testBuffer);

// Sarah - TODO: change mockImage argument to buffer object, also pass in new file path
beforeAll((done) => {
  return transform.spring(mockData[0], `${__dirname}/assets/house-spring.bmp`, (err1, data1) => {
    mockData.push(data1);
    return transform.random(mockData[0], 4, `${__dirname}/assets/house-random.bmp`, (err2, data2) => {
      mockData.push(data2);
      return transform.invert(mockData[0], `${__dirname}/assets/house-invert.bmp`, (err3, data3) => {
        mockData.push(data3);
        return transform.darken(mockData[0], `${__dirname}/assets/house-darken.bmp`, (err4, data4) => {
          mockData.push(data4);
          done();
        });
      });
    });
  });
});

describe('transform.js', () => {
  test('should create spring image', () => {
    expect(mockData[0]).not.toEqual(mockData[1]);
  });
  test('should create random image', () => {
    expect(mockData[0]).not.toEqual(mockData[2]);
  });
  test('should create inverted image', () => {
    expect(mockData[0]).not.toEqual(mockData[3]);
  });
  test('should create darkened image', () => {
    expect(mockData[0]).not.toEqual(mockData[4]);
  });
});
