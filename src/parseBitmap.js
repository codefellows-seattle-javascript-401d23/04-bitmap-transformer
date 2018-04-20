'use strict';

parseBitmap.parse = (buffer) => {
    if (error) {
        throw error;
    }
    const parsedBitmap = {};
    const FILE_SIZE_OFFSET = 2;
    const HEIGHT_OFFSET = 2;
    const COLOR_TABLE_OFFSET = 54;
    const COLOR_TABLB_SIZE = 4096;

    parsedBitmap.type = buffer.toString('utf-8', 0, 2);
    parsedBitmap.fileSize = buffer.readInt32LE(FILE_SIZE_OFFSET);
    parsedBitmap.height = buffer.readInt32LE(HEIGHT_OFFSET);
    parsedBitmap.colorTable = buffer.slice(COLOR_TABLE_OFFSET, COLOR_TABLB_SIZE);

    return parsedBitmap;
};
