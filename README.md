
# Lab 04: Bitmap Transformer

**Authors**: Dawn Aldrich, Jennifer Piper, Sean Miller

This is an app to manipulate bitmap images and write the transformed image to a file. It has a very simple command-line interface.

## Getting Started
In a node.js environment, from the root of this repo, install dependencies:
* `npm i`

The app expects input files to be located in the `/src/assets` folder. There are five example files to start:
```
house.bmp
land.bmp
land2.bmp
land3.bmp
marbles.bmp
```
If you would like to use other .bmp files, add them to the /src/assets folder.

To start the app: 
* `node index.js`

It will respond with a series of instructions:

```
Please enter an input file ending with .bmp, found in the ./assets folder:
```

- Enter the name of the .bmp file to be transformed, for example, `house.bmp`


```
Please enter a transform name. Choices: "invert", "lighten", "crop" or "flip"
```
- Enter one of the four choices. For example `lighten`.

```
Please enter an output file name, ending with ".bmp":
```
- Enter the name of the file where you would like the new image saved, for example `lightened-house.bmp`

It will respond with a success message and the location of the new file, for example: 
```
info: Transformed bitmap written to ./assets/lightened-house.bmp
```

## Modules:

**parseBitmap.parse** (arity 1)
- expects input `(buffer)`, where `buffer` is a bitmap buffer from the `fs.readFile()` function
- parses the bitmap buffer into meaningful chunks and assigns them to attributes of 
  the `parsedBitmap` object: 
  ```  parsedBitmap.type
       parsedBitmap.fileSize
       parsedBitmap.height
       parsedBitmap.colorTable
       parsedBitmap.size
       parsedBitmap.offset
       parsedBitmap.pixalTable
       parsedBitmap.allData```

- returns the parsedBitmap object.


**lightenColors.lighten** (arity 2)
- expects input (buffer, callback), where `buffer` is a bitmap buffer from the `fs.readFile()` function
 - lightens the colors in the buffer and returns the new buffer as an argument to the callback function.

**invertColors.invert** (arity 2)
-  expects input (buffer, callback), where `buffer` is a bitmap buffer from the `fs.readFile()` function
- inverts the colors in the buffer and returns the new buffer as an argument to the callback function.

**decreaseSize.resize** (arity 2)
-  expects input `(buffer, callback)`, where `buffer` is a bitmap buffer from the `fs.readFile()` function
- divides the height and width values of the input bitmap buffer by two, and returns the new buffer as an argument to the callback function.

**flipBitmap.flip** (arity 2)
-  expects input `(parsedBuffer, callback)`, where `parsedBuffer` is a `parsedBitmap` object from the `parseBitmap.parse()` module.
- transforms the pixel table of the input bitmap buffer to flip the picture upside down, and returns the new buffer as an argument to the callback function.
