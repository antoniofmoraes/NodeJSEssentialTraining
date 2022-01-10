const readLine = require('readline');

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("How do you like node? ", answer => {
    console.log(`Your answer: ${answer}`);
})