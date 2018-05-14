'use strict';

const parseBitmap = module.exports = {};

parseBitmap.parse = (buffer) => {
  // Sean - TODO: Add error checks
  const parsedBitmap = {};
  const FILE_SIZE_OFFSET = 2;
  const HEIGHT_OFFSET = 22;
  const WIDTH_OFFSET = 18;
  const BITS_PER_PIXAL = 28;
  const COLOR_TABLE_OFFSET = 54;
  const COLOR_TABLE_SIZE = 1000;
  const PIXAL_ARRAY_OFFSET = 10;
  const ROW_SIZE = (((BITS_PER_PIXAL * Math.abs(WIDTH_OFFSET)) + 31) / 32) * 4;
  const PIXAL_ARRAY_SIZE = ROW_SIZE * HEIGHT_OFFSET;
  const HORIZANTAL_RESOLUTION_OFFSET = 38;
  const VERTICLE_RESOLUTION = 42;

  parsedBitmap.type = buffer.toString('utf-8', 0, 2);
  parsedBitmap.filesize = buffer.readInt32LE(FILE_SIZE_OFFSET);
  parsedBitmap.height = buffer.readInt32LE(HEIGHT_OFFSET);
  parsedBitmap.width = buffer.readInt32LE(WIDTH_OFFSET);
  parsedBitmap.horizantal = buffer.slice(HORIZANTAL_RESOLUTION_OFFSET, parsedBitmap.width);
  parsedBitmap.verticle = buffer.slice(VERTICLE_RESOLUTION, parsedBitmap.height);
  parsedBitmap.colorTable = buffer.slice(COLOR_TABLE_OFFSET, COLOR_TABLE_SIZE);
  parsedBitmap.bitsPerPixal = buffer.readInt32LE(BITS_PER_PIXAL);
  parsedBitmap.pixalOffset = buffer.readInt32LE(PIXAL_ARRAY_OFFSET);
  parsedBitmap.pixalArraySize = buffer.readInt32LE(PIXAL_ARRAY_SIZE);
  // parsedBitmap.pixalTable = buffer.slice(PIXAL_ARRAY_OFFSET);
  
  parsedBitmap.size = buffer.readInt32LE(2);
  parsedBitmap.offset = buffer.readUInt32LE(10);
  parsedBitmap.pixalTable = buffer.slice(parsedBitmap.offset, parsedBitmap.size);

  parsedBitmap.allData = buffer;
  return parsedBitmap;
};
