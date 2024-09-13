const fs = require('fs');

const readStream = fs.createReadStream('input.txt');
const writeStream = fs.createWriteStream('output.txt');

readStream.pipe(writeStream);

// const zlib = require("zlib");
// const fs = require("fs");

// const readStream = fs.createReadStream("input.txt");
// const writeStream = fs.createWriteStream("output.txt.gz");

// const gzip = zlib.createGzip();

// readStream.pipe(gzip).pipe(writeStream);

// readStream.on('error', (err) => {
//     console.error('Read error:', err);
//   });

//   writeStream.on('error', (err) => {
//     console.error('Write error:', err);
//   });

//   readStream.pipe(writeStream).on('error', (err) => {
//     console.error('Pipe error:', err);
//   });
