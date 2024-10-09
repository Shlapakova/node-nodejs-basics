import { Transform } from 'stream';
const reverse =  new Transform ({
    transform(chunk,encoding,callback) {
        const reversed = chunk.toString().split('').reverse().join('');
        callback(null, reversed);
    }
});

const transform = () => {
    process.stdin.pipe(reverse).pipe(process.stdout);
};
await transform();