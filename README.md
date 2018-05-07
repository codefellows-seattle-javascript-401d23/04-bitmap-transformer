
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

`Please enter an input file ending with .bmp, found in the ./assets folder:`
Enter the name of the .bmp file to be transformed, for example, `house.bmp`

```
Please enter a transform name. Choices: "invert", "lighten", "crop" or "flip"
```
Enter one of the four choices. For example `lighten`.

```
Please enter an output file name, ending with ".bmp":
```
Enter the name of the file where you would like the new image saved, for example `lightened-house.bmp`

It will respond with a success message and the location of the new file, for example: 
```
info: Transformed bitmap written to ./assets/lightened-house.bmp
```

## Modules:

###  parseBitmap.parse (arity 1)
- expects input of XXX
- returns XXX
- returns XXX if input is not YYY
- 