// const logger = require('./logger');

const parseBitmap = module.exports = {};

parseBitmap.parse = (buffer, transformMethod, callback, callback2) => {
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
  // console.log(typeof parsedBitmap.colorTableOffset);
  // console.log(parsedBitmap.colorTableOffset.toString('hex'));
  // console.log(parsedBitmap.height.readInt16LE(0));


  // Constructor Function
  function BitMapData(obj) {
    this.type = obj.buffer.toString('utf-8', 0, 2);
    this.fileSize = obj.readInt32LE(FILE_SIZE_OFFSET);
    this.dibHeaderSize = obj.readInt32LE(14);
    this.height = obj.slice(HEIGHT_OFFSET).readInt16LE(0);
    this.colorTableOffset = obj.slice(COLOR_TABLE_OFFSET);
    this.offset = obj.readInt32LE(10);
    this.pixelArray = obj.slice(54, 1078);
    this.buffer = obj;
    this.colorTableBuffer = obj.slice(this.dibHeaderSize + 14, this.offset);
  }
  

  // console.log(process.argv);


  // method on the constructor to 
  BitMapData.prototype.reverse = function () {
    this.pixelArray.reverse();
    return this;
  };

  BitMapData.prototype.bluescale = function () {
    for (let i = 0; i < this.colorTableBuffer.length; i += 4) {
      this.colorTableBuffer[i + 2] = 0;
    }
    // console.log(this.colorTableBuffer.toString('hex'));
    return this;
  };

  // new instance of the constructor
  const bitmap = new BitMapData(buffer);

  (function () {
    const returnString = `.${transformMethod}()`;
    return eval(`bitmap${returnString}`);
  }());

  console.log(bitmap.pixelArray);
  console.log(bitmap.pixelArray.reverse());

  const transformedData = Buffer.from(bitmap.buffer, 'hex');

  return callback(transformedData, callback2);
};
