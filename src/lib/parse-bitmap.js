const parseBitmap = module.exports = {};

parseBitmap.parse = (buffer) => {
  // will need to add error checks in here
  const parsedBitmap = {};
  const FILE_SIZE_OFFSET = 2;
  const HEIGHT_OFFSET = 22;
  const COLOR_TABLE_OFFSET = 54; //index based values for starts at 55....
  const COLOR_TABLE_SIZE = 1000;

  // this is reading the bitmap file...
  parserBitmap.type = buffer.toString('utf-8', 0, 2);
  parserBitmap.fileSize = buffer.readInt32LE(FILE_SIZE_OFFSET);
  parserBitmap.height = buffer.slice(COLOR_TABLE_OFFSET, COLOR_TABLE_SIZE);

  return parserBitmap;
};