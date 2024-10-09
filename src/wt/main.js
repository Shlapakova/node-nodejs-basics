import { Worker, isMainThread } from 'worker_threads';
import os from 'os';

const runFibonacciService = () => {
    const numCPUs = os.cpus().length;
    const workers = [];
    for (let i = 0; i < numCPUs; i++) {
        const worker = new Worker(new URL('./worker.js', import.meta.url));
        workers.push(worker);
        const n = 10 + i;
        worker.postMessage(n);
        worker.on('message', (result) => {
            console.log(`Fibonacci of ${n} is:`, result.data);
        });
        worker.on('error', (err) => {
            console.error('Worker error:', err);
        });
        worker.on('exit', (code) => {
            if (code !== 0) {
                console.error(`Worker stopped with exit code ${code}`);
            }
        });
    }
};

if (isMainThread) {
    runFibonacciService();
}
