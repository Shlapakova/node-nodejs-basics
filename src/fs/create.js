import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const create = async () => {
    const fileDir = path.join(__dirname, 'files');
    const filePath = path.join(fileDir, 'fresh.txt');
    const content = 'I am fresh and young';
    try {
        await fs.mkdir(fileDir,{recursive:true});
        await fs.writeFile(filePath,content, {flag: 'wx',encoding:'utf-8'});
        console.log('File created');
    }catch (error) {
        if(error.code === 'EEXIST') {
            throw new Error('FS operation failed');
        } else {
            throw new Error('FS operation failed');
        }
    }
};

await create();