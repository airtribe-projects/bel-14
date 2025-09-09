const fs = require('fs');
const readableStream = fs.createReadStream('../input/leviathan.txt', { highWaterMark: 64 * 1024 }); // 64 KB
const writableStream = fs.createWriteStream('../output/backpressureFile.txt', { highWaterMark: 8*1024 }); // 16 KB

readableStream.on('data', (chunk) => {
    console.log(`Read ${chunk.length} bytes`);
    const canWrite = writableStream.write(chunk);   // There is a possibility of data loss
    console.log(canWrite);

    if (!canWrite) {
        readableStream.pause();
    }
});

writableStream.on('drain', () => {
    console.log('Writable stream is drained. Good to start readable stream');
    readableStream.resume();
})

readableStream.on('end', () => {
  console.log('Readable stream ended');
  writableStream.end();
});

readableStream.on('error', (err) => {
  console.error('Error reading file:', err);
});

writableStream.on('error', (err) => {
  console.error('Error writing file:', err);
});
