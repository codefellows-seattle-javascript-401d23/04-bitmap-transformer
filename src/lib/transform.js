// Transform types:
// 1. Flip vertically
// 2. Greyscale
// 3. Watermark?
// 4. Border?

const fileHandler = require('./read-write');

const transform = module.exports = {};

transform.flip = (object) => {
  // console.log(object.height);
  for (let i = object.COLOR_TABLE_OFFSET; i < 10; i++) {
    object.allData.write('\xaa', 0, 2);
  }
  // object.allData.write('a', object.COLOR_TABLE_OFFSET, 1000);
  // console.log(object.colorTable);
  fileHandler.write(object.allData);
};

// transform.greyscale = (object) => {
//   // code
// };
//
// transform.watermark = (object) => {
//   // code
// };
//
// transform.border = (object) => {
//   // code
// };
