const fs = require('fs');

fs.readFile('./assets/alex.jpg', (err, img) => {
    if (err) {
        console.log(`There's an error: ${err}`);
    }
    console.log("File read");
    console.log(img);
})

