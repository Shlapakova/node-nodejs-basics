import { createHash } from 'crypto';
import { createReadStream } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __filedir = path.dirname(__filename);


const calculateHash = async () => {
    const filePath = path.join(__filedir,'files', 'fileToCalculateHashFor.txt');
    const hash = createHash('sha256');
    const stream = createReadStream(filePath);
    stream.on('data',(chunk)=> {
        hash.update(chunk);
    });
    stream.on('end',()=> {
        console.log(hash.digest('hex'));
    });
    stream.on('error', (err) => {
        console.error('FS operation failed', err.message);
    });
};

await calculateHash();