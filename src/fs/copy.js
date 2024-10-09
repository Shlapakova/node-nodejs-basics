import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const copy = async () => {
     const mainDir = path.join(__dirname, 'files');
     const copyDir = path.join(__dirname, 'files_copy');
     try {
        await fs.access(mainDir);
        try {
            await fs.access(copyDir);
            throw new Error('FS aoperation failed');
        } catch (err) {
            if (err.code !== 'ENOENT') {
                throw new Error('FS operation failed');
            }
        }
        await fs.cp(mainDir,copyDir, {recursive: true});
        console.log('Files copied');
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await copy();
