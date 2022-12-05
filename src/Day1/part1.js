import { promises as fs, access, constants } from 'fs'

const PACKAGE = '\n\n';
const calorieInd = '\n';




const elves = [];

function splitStr(str, separator) {

    // Function to split string
    var string = str.split(separator);


    return string
};

// Initialize string
const fileContent = await fs.readFile('puzzle_file', 'utf8');
/*const fileContent = puzzle_file;*/
var separator = PACKAGE;

// Function call
const BAGS = splitStr(fileContent, separator);

BAGS.forEach((calorieBags) => {
    const calorie = calorieBags.split(calorieInd).map((cal) => parseInt(cal, 10));
    const calorieSomme = calorie.reduce((a, b) => a + b, 0);
    /* console.l{ calorie, calorieSomme }og("calorie", calorieCalcul) */
    elves.push(calorieSomme);


});
console.log(elves)
console.log(Math.max(...elves))












