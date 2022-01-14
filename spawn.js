const cp = require('child_process');

const questionApp = cp.spawn("node", ["questions.js"]);

questionApp.stdin.write("Antonio \n");
questionApp.stdin.write("Curitiba \n");
questionApp.stdin.write("WebAPPs \n");

questionApp.stdout.on('data', data => {
    console.log(`from question app: ${data}`);
});

questionApp.on("close", () => {
    console.log("question app process exited");
})