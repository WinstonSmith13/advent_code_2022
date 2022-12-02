const data = require("fs");


//data.writeFileSync("./Day1/puzzle_file.txt", "Mon premier fichier.");

const fileContent = data.readFileSync('./Day1/puzzle_file.txt', 'utf8');

console.log(fileContent);