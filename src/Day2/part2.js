import { promises as fs, access, constants } from 'fs'
/* 
const A = 1;
const B = 2;
const C = 3; 

const X = 1;
const Y = 2;
const Z = 3;

rock = 1;
paper = 2; 
scissors = 3;

paper - Y > rock - X
scissors - Z > paper - Y
rock - X > scissors - Z

A < Y = 6
A > Z = 0
A = X = 3

B < Z = 6
B > X = 0
B = Y = 3

C < X = 6
C > Y = 0
C = Z = 3


if (x){scoreShape = 1 } and if (A < Y || B < Z || C < X ) {ScoreRound = 6} elseif (A = X  || B = Y || C = Z) {ScoreRound = 6} else {scoreRound = 0}
if (y){scoreShape = 2 } and if
if (z) {scoreShape = 3 } and if

const lost = 0;
const draw = 3;
const win = 6;

resultRound = scoreShape + scoreRound
resultTotal = sum(resultRound)
---------------------------

Part 2 

x = 0
y = 3
z = 6
*/


function splitStr(str, separator) {

    // Function to split string
    var string = str.split(separator);


    return string
};


const fileContent = await fs.readFile('puzzle_file', 'utf8');


const PACKAGE = '\n';
const SHAPES = ' '

const gameScript = splitStr(fileContent, PACKAGE);

/* console.log(gameScript); */

var scoreShape = 0
var scoreRound = 0


gameScript.forEach((round) => {

    const shape = round.split(' ');

    if (shape[0] === 'A' && shape[1] === 'X') {
        scoreRound += 0;
        scoreShape += 3;
        console.log("Perdu");
    }
    if (shape[0] === 'B' && shape[1] === 'Y') {
        scoreRound += 3;
        scoreShape += 2;
        console.log("Nul");
    }
    if (shape[0] === 'C' && shape[1] === 'Z') {
        scoreRound += 6;
        scoreShape += 1;
        console.log("Gagné");
    }
    if (shape[0] === 'A' && shape[1] === 'Y') {
        scoreRound += 3;
        scoreShape += 1;
        console.log("Nul");
    }
    if (shape[0] === 'B' && shape[1] === 'Z') {
        scoreRound += 6;
        scoreShape += 3;
        console.log("Gagné");
    }
    if (shape[0] === 'C' && shape[1] === 'X') {
        scoreRound += 0;
        scoreShape += 2;
        console.log("Perdu");
    }
    if (shape[0] === 'A' && shape[1] === 'Z') {
        scoreRound += 6;
        scoreShape += 2;
        console.log("Gagné");
    }
    if (shape[0] === 'B' && shape[1] === 'X') {
        scoreRound += 0;
        scoreShape += 1;
        console.log("Perdu");
    }
    if (shape[0] === 'C' && shape[1] === 'Y') {
        scoreRound += 3;
        scoreShape += 3;
        console.log("Nul");
    }

});

console.log(scoreShape);
console.log(scoreRound);
var resultTotal = scoreShape + scoreRound;
console.log(resultTotal);