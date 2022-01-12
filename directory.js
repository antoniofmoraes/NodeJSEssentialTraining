const fs = require('fs');

let dirname = "storage-files";
if (fs.existsSync(dirname)) {
    console.log("already there");
}else {
    fs.mkdir(dirname, err => {
        if (err) throw err;

        console.log("directory created");
    });
}