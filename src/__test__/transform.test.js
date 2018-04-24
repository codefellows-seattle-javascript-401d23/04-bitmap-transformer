'use strict';

// const white = require('../lib/transform-white');
// const invert = require('../lib/transform-invert');
// const toxic = require('../lib/transform-toxic');
// const random = require('../lib/transform-random');
// const parseBitmap = require('../lib/parse-bitmap');
const fs = require('fs');

// require('jest');
const testBmp = fs.readFile('./asset/house.bmp', (err, data) => data);
const invertBmp = fs.readFile('./transformations/invert-transform', (err, data) => data);
const randomBmp = fs.readFile('./transformations/random-transform', (err, data) => data);
const toxicBmp = fs.readFile('./transformations/toxic-transform', (err, data) => data);
const whiteBmp = fs.readFile('./transformations/white-transform', (err, data) => data);

describe('Transformation Modules', () => {
  describe('transform-invert.test', () => {
    it('Should make should the output is not the same as the input', () => {
      expect(testBmp).not.toEqual(invertBmp);
    });
  });

  describe('transform-random.test', () => {
    it('Should make should the output is not the same as the input', () => {
      expect(testBmp).not.toEqual(randomBmp);
    });
  });

  describe('transform-toxic.test', () => {
    it('Should make should the output is not the same as the input', () => {
      expect(testBmp).not.toEqual(toxicBmp);
    });
  });

  describe('transform-white.test', () => {
    it('Should make should the output is not the same as the input', () => {
      expect(testBmp).not.toEqual(whiteBmp);
    });
  });
});
