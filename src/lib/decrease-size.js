const decreaseSize = module.exports = {};

decreaseSize.resize = (buffer, callback) => {
  // TODO: add error checks
  const HEIGHT_OFFSET = 18;
  const WIDTH_OFFSET = 22;

  decreaseSize.height = buffer.readInt32LE(HEIGHT_OFFSET);
  decreaseSize.width = buffer.readInt32LE(WIDTH_OFFSET);
  // resize
  const newheight = (decreaseSize.height / 2).toString();
  const newWidth = (decreaseSize.width / 2).toString();
  buffer.writeInt16LE(newheight, 18, 4);
  buffer.writeInt16LE(newWidth, 22, 4);
  return callback(buffer);
};
