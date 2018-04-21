const fs = require('fs');

const monoChrome = module.exports = {};

monoChrome.transform = (parsedBitmap) => {
  parsedBitmap.data = 1;
  fs.writeFile(`${__dirname}/__test__/asset/testALT.bmp`, parsedBitmap, (err) => {
    if (err) throw err;
    console.log('new file saved');
  });
};
