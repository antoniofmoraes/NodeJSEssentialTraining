const waitTime = 3000;
const waitInterval = 500;
let currentTime = 0;

const incTime = () => {
    currentTime += waitInterval;
    console.log(`waiting ${currentTime/1000} seconds`);
}

console.log(`Setting a ${waitTime / 1000} seconds delay`);

const timeout = () => {
    clearInterval(intervals);
    console.log("done");
}; 

const intervals = setInterval(incTime, waitInterval);
setTimeout(timeout, waitTime);