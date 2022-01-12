const fs = require('fs');

fs.readdir('./assets', (err, data) => {
    if (err) {
        throw err;
    }
    console.log("Complete");
    console.log(data);
})

console.log("Started reading files");