const waitTime = 3000;
console.log(`Setting a ${waitTime / 1000} seconds delay`);

const timeout = () => {console.log("done")}; 

setTimeout(timeout, waitTime);