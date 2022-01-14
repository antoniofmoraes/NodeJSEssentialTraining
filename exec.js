const cp = require('child_process');

cp.exec("node readStream", function(err, data, stderr) {
    console.log(data);
})