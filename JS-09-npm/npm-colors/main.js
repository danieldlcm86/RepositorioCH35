const colors = require("colors");

console.log('hello'.green); // outputs green text
console.log('i like cake and pies'.underline.red) // outputs red underlined text
console.log('inverse the color'.inverse); // inverses the color
console.log('Es un arcoiris'.rainbow); // rainbow
console.log('Run the trap'.trap); // Drops the bass

colors.setTheme({
    silly: 'rainbow',
    input: 'grey',
    verbose: 'cyan',
    prompt: 'grey',
    info: 'green',
    data: 'grey',
    help: 'cyan',
    warn: 'yellow',
    debug: 'blue',
    error: 'red'
});

console.log("Nuevo estilo".verbose);
console.log("Nuevo estilo".debug);