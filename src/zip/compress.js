import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compress = () => {
    const inputFilePath = path.join(__dirname,'files', 'fileToCompress.txt');
    const outputFilePath = path.join(__dirname, 'files', 'archive.gz');
    const readStream = createReadStream(inputFilePath);
    const gzipStream = createGzip();
    const writeStream = createWriteStream(outputFilePath);
    readStream
        .pipe(gzipStream)
        .pipe(writeStream)
};

await compress();