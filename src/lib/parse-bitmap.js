'use strict';

const parseBitmap = module.exports = {};

parseBitmap.parse = (buffer, callback) => {
  // TODO: ADD ERROR CHECKS
  if (typeof buffer !== 'object') {
    console.log('error');
  }
  const parsedBitmap = {};
  const FILE_SIZE_OFFSET = 2;
  const DATA_OFFSET = 10;
  const HEIGHT_OFFSET = 22;
  const COLOR_TABLE_OFFSET = 54; // Starts at position 55
  const COLOR_TABLE_SIZE = 1024;
  const RASTER_DATA_OFFSET = 1078;
  const BITCOUNT_OFFSET = 28;

  //------------------------------------------------------
  // READING INFORMATION FROM THE BITMAP FILE
  //------------------------------------------------------
  parsedBitmap.data = buffer;
  parsedBitmap.dataString = buffer.toString('hex', 0).length;
  parsedBitmap.type = buffer.toString('utf-8', 0, 2);
  // Vinicio - 4 bytes * 8 = 32 bits
  parsedBitmap.fileSize = buffer.readInt32LE(FILE_SIZE_OFFSET);
  parsedBitmap.dataOffset = buffer.readInt32LE(DATA_OFFSET);
  parsedBitmap.height = buffer.readInt32LE(HEIGHT_OFFSET);
  parsedBitmap.headersString = buffer.toString('hex', 0, 54).length;
  parsedBitmap.colorTable = buffer.slice(COLOR_TABLE_OFFSET, COLOR_TABLE_SIZE);
  parsedBitmap.colorArray = parsedBitmap.colorTable.toString('hex').split(/(\w{8})/).filter(x => x !== '');
  parsedBitmap.colorSize = buffer.toString('hex', COLOR_TABLE_OFFSET, COLOR_TABLE_SIZE).length;
  parsedBitmap.rasterDataString = buffer.toString('hex', RASTER_DATA_OFFSET).length;
  parsedBitmap.bitCount = buffer.readInt32LE(BITCOUNT_OFFSET);

  return callback(parsedBitmap);
};
