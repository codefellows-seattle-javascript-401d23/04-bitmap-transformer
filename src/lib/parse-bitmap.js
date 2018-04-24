// const logger = require('./logger');

const parseBitmap = module.exports = {};

parseBitmap.parse = (buffer, transformMethod, callback) => {
  // will need to add error checks in here

  const FILE_SIZE_OFFSET = 2;
  const HEIGHT_OFFSET = 22;
  const COLOR_TABLE_OFFSET = 54;
  // const COLOR_TABLE_SIZE = 100;

  // Constructor Function
  class BitMapData {
    constructor(obj) {
      this.type = obj.toString('utf-8', 0, 2);
      this.fileSize = obj.readInt32LE(FILE_SIZE_OFFSET);
      this.dibHeaderSize = obj.readInt32LE(14);
      this.height = obj.slice(HEIGHT_OFFSET).readInt16LE(0);
      this.colorTableOffset = obj.slice(COLOR_TABLE_OFFSET);
      this.offset = obj.readInt32LE(10);
      this.pixelArray = obj.slice(this.offset, this.fileSize); // 54, 1078
      this.buffer = obj;
      this.colorTableBuffer = obj.slice(this.dibHeaderSize + 14, this.offset);
      this.method = transformMethod;
      this.callback = callback;
    }
    // transformation methods on the constructor
    invert() {
      this.pixelArray.reverse();
      return this;
    }
    bluescale() {
      for (let i = 0; i < this.colorTableBuffer.length; i += 4) {
        this.colorTableBuffer[i + 2] = 0;
      }
      return this;
    }
    redscale() {
      for (let i = 0; i < this.colorTableBuffer.length; i += 4) {
        this.colorTableBuffer[i + 1] = 0;
      }
      return this;
    }
    randScale() {
      for (let i = 0; i < this.colorTableBuffer.length; i += 4) {
        this.colorTableBuffer[i + 10] = 0;
        if (i > 5) {
          this.colorTableBuffer[i + 3] = 1;
        }
      }
      return this;
    }
    nightVision() {
      for (let i = 0; i < this.colorTableBuffer.length; i += 4) {
        this.colorTableBuffer[i + 12] = 1;
        this.colorTableBuffer[i + 6] = 1;
      }
      return this;
    }

    somethingGreen() {
      for (let i = 8; i < this.colorTableBuffer.length; i += 8) {
        this.colorTableBuffer[i + 10] = 0;
      }
      return this;
    }

    doStuff() {
      this[this.method]();
    }

    finish() {
      return this.callback();
    }
  }

  // new instance of the constructor
  const bitmap = new BitMapData(buffer);
  
  (bitmap.doStuff)();

  const transformedData = Buffer.from(bitmap.buffer, 'hex');

  return callback(transformedData);
};
