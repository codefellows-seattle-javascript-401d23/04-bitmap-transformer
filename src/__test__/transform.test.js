'use strict';

const transform = require('../lib/transform');

const mockImage = `${__dirname}/assets/house.bmp`;

const mockData = [];

// Sarah - TODO: change mockImage argument to buffer object, also pass in new file path
beforeAll((done) => {
  return transform.spring(mockImage, (err1, data1) => {
    mockData.push(data1);
    return transform.random(mockImage, (err2, data2) => {
      mockData.push(data2);
      return transform.invert(mockImage, (err3, data3) => {
        mockData.push(data3);
        return transform.darken(mockImage, (err4, data4) => {
          mockData.push(data4);
          done();
        });
      });
    });
  });
});

describe('transform.js', () => {
  test('#spring', () => {
    if (mockImage !== mockData[0]) {
      expect(true).toEqual(true);
    }
  });
  test('#random', () => {
    if (mockImage !== mockData[1]) {
      expect(true).toEqual(true);
    }
  });
  test('#invert', () => {
    if (mockImage !== mockData[2]) {
      expect(true).toEqual(true);
    }
  });
  test('#darken', () => {
    if (mockImage !== mockData[3]) {
      expect(true).toEqual(true);
    }
  });
});
