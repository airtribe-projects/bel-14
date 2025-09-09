const fs = require('fs');
const crypto = require('crypto');
const { Transform, pipeline } = require('stream');
const path = require('path');

const sourceFile = path.resolve(__dirname, 'original.txt');
const destinationFile = path.resolve(__dirname, 'transferred.txt');


class ChecksumStream extends Transform {
  constructor(algorithm = 'sha256') {
    super();
    this.hash = crypto.createHash(algorithm);
  }

  _transform(chunk, encoding, next) {
    this.hash.update(chunk); // Update the hash with the current chunk
    this.push(chunk); // Pass the chunk to the next stream in the pipeline
    next();
  }

  _flush(callback) {
    this.emit('checksum', this.hash.digest('hex')); // Emit the final checksum when the stream ends
    callback();
  }
}

const readStream = fs.createReadStream(sourceFile); // Readable stream
const writeStream = fs.createWriteStream(destinationFile); // Writable stream
const checksumStream = new ChecksumStream();


checksumStream.on('checksum', (transferedChecksum) => {
  const originalChecksum = fs.readFileSync('./checksum.txt').toString();
  console.log(`Original checksum: ${originalChecksum} \nTransfered File checksum : ${transferedChecksum} \nAre they equal? ${originalChecksum === transferedChecksum}`);
});

pipeline(
  readStream,
  checksumStream, // Compute checksum
  writeStream, // Write to destination
  (err) => {
    if (err) {
      console.error('Pipeline failed:', err);
    } else {
      console.log('File transfer complete and checksum computed.');
    }
  }
);

//

// [1, 2, 3, 1, 5] ==> billions of such numbers
// [1, 1.5, 2, ....]
// You need to calculate running mean
