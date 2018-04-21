// const logger = require('./logger');

const parseBitmap = module.exports = {};

parseBitmap.parse = (buffer) => {
  // will need to add error checks in here
  const parsedBitmap = {};
  const FILE_SIZE_OFFSET = 2;
  const HEIGHT_OFFSET = 22;
  const COLOR_TABLE_OFFSET = 54; //index based values for starts at 55....
  const COLOR_TABLE_SIZE = 100;

  // this is reading the bitmap file...
  parsedBitmap.type = buffer.toString('utf-8', 0, 2);
  parsedBitmap.fileSize = buffer.readInt32LE(FILE_SIZE_OFFSET);
  parsedBitmap.height = buffer.slice(HEIGHT_OFFSET);
  parsedBitmap.colorTableOffset = buffer.slice(COLOR_TABLE_OFFSET);
  // .readUInt32LE(12);

  console.log(parsedBitmap.colorTableOffset);
  console.log(parsedBitmap.height.readInt16LE(0));

  // Constructor Function
  function BitMapData(obj) {
    this.type = obj.buffer.toString('utf-8', 0, 2);
    this.fileSize = obj.readInt32LE(FILE_SIZE_OFFSET);
    this.height = obj.slice(HEIGHT_OFFSET).readInt16LE(0);
    this.colorTableOffset = obj.slice(COLOR_TABLE_OFFSET);
    this.offset = obj.slice(10);
    this.pixelArray = obj.slice(this.offset, this.fileSize);
  }
  
  // new instance of the constructor
  const bitmap = new BitMapData(buffer);

  console.log(bitmap);

  // method on the constructor to 
  BitMapData.prototype.grayscale = function() {
  }
};
