import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const spawnChildProcess = async (args) => {
    const filename = path.join(__dirname,'files','script.js')
    const child = spawn('node', [filename, ...args]);
   process.stdin.pipe(child.stdin);
    child.stdout.pipe(process.stdout);
};
const args = ['arg1','arg2'];
spawnChildProcess(args);
