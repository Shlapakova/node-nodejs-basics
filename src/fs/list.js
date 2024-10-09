import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const list = async () => {
    const filePath = path.join(__dirname, 'files');
    try {
        await fs.access(filePath);
        const files = await fs.readdir(filePath);
        console.log(files);
    } catch (err){
        console.error('FS operation failed');
    }
};

await list();