const grab = flag => {
    let flagIndex = process.argv.indexOf(flag) + 1;
    return process.argv[flagIndex];
}

const user = grab('--user');
const greeting = grab('--greeting');
console.log(`User: ${user}, Greeting: ${greeting}`);