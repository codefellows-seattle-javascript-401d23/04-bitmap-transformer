'use strict';

const fs = require('fs');
const readWrite = require('../lib/read-write');

const mockImage = `${__dirname}/../assets/mockFlip.bmp`;
const mockArray = [];
const compareToArray = [];
const houseImage = `${__dirname}/../assets/house.bmp`;

// beforeAll((done) => {
//   return fs.readFile(houseImage, (err, buffer) => {
//     mockArray.push(buffer);
//     done();
//   });
// });

describe('this is testing our file reader', () => {
  test('should display our image from the file system', (done) => {
    return fs.readFile(houseImage, (err, buffer) => {
      mockArray.push(buffer);
      return readWrite.read(houseImage, (error, data) => {
        compareToArray.push(data);
        if (mockArray.length === compareToArray.length) {
          expect(mockArray).toEqual(compareToArray);
        }
        done();
      });
    });
  });
  test('should err out for non-existent first file', (done) => {
    return readWrite.read(mockImage, (err, data) => {
      expect(err).toHaveProperty('errno');
      expect(data).toEqual(undefined);
      done();
    });
  });

  describe('this is testing our file writer', () => {
    test('should create a new file successfully!', (done) => {
      return fs.readFile(houseImage, (err, buffer) => {
        mockArray.push(buffer);
        const newFilePath = `${__dirname}/../assets/test.bmp`;
        return readWrite.write(mockArray[0], newFilePath, () => {
          expect(fs.existsSync(newFilePath)).toEqual(true);
          done();
        });
      });
    });
  });
});
