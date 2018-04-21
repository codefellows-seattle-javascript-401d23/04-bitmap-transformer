
const monoChrome = module.exports = {};

monoChrome.transform = (writePath, buffer, callback) => {
  const COLOR_TABLE_OFFSET = 54;
  const COLOR_TABLE_SIZE = 1024;

  let colorTable = buffer.slice(COLOR_TABLE_OFFSET, COLOR_TABLE_SIZE);  
  console.log(colorTable);
  callback(null, buffer);
};
