const parseBitmap = module.exports = {};

parseBitmap.parse = (buffer) => {
  // TODO: add error checks
  const parsedBitmap = {};
  const FILE_SIZE_OFFSET = 2;
  const HEIGHT_OFFSET = 22;
  const COLOR_TABLE_OFFSET = 54;
  const COLOR_TABLE_SIZE = 1000;
  const PIXAL_ARRAY_OFFSET = 10;

  // Jennifer - adds
  parsedBitmap.type = buffer.toString('utf-8', 0, 2);
  parsedBitmap.fileSize = buffer.readInt32LE(FILE_SIZE_OFFSET);
  parsedBitmap.height = buffer.readInt32LE(HEIGHT_OFFSET);
  parsedBitmap.colorTable = buffer.slice(COLOR_TABLE_OFFSET, COLOR_TABLE_SIZE);
  
  // Sean -adds
  parsedBitmap.size = buffer.readInt32LE(FILE_SIZE_OFFSET);
  parsedBitmap.offset = buffer.readUInt32LE(PIXAL_ARRAY_OFFSET);
  parsedBitmap.pixalTable = buffer.slice(parsedBitmap.offset, parsedBitmap.size);

  parsedBitmap.allData = buffer;

  return parsedBitmap;
};
