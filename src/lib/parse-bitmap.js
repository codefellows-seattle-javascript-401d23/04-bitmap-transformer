const parseBitmap = module.exports = {};

parseBitmap.parse = (buffer) => {
  // will need to add error checks in here
  const parsedBitmap = {};
  const FILE_SIZE_OFFSET = 2;
  const HEIGHT_OFFSET = 22;
  const COLOR_TABLE_OFFSET = 54; //index based values for starts at 55....
  const COLOR_TABLE_SIZE = 46;

  // this is reading the bitmap file...
  parsedBitmap.type = buffer.toString('utf-8', 0, 2);
  parsedBitmap.fileSize = buffer.readInt32LE(FILE_SIZE_OFFSET);
  parsedBitmap.height = buffer.slice(HEIGHT_OFFSET);
  parsedBitmap.colorTableSize = buffer.readInt32LE(COLOR_TABLE_SIZE);

  console.log(parsedBitmap.colorTableSize);
  return parsedBitmap;
};
