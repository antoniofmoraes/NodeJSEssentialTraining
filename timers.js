const waitTime = 5000;
const waitInterval = 100;
let currentTime = 0;

const incTime = () => {
    currentTime += waitInterval;
    const p = Math.floor(currentTime / waitTime * 100);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`Waiting: ${p}%`)
}

console.log(`Setting a ${waitTime / 1000} seconds delay`);

const timeout = () => {
    clearInterval(intervals);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    console.log("done");
}; 

const intervals = setInterval(incTime, waitInterval);
setTimeout(timeout, waitTime);