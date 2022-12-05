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

    if (shape[1] === 'X') {
        scoreShape += 1;
        console.log('rock');
    }
    if (shape[1] === 'Y') {
        scoreShape += 2;
        console.log('paper');
    }
    if (shape[1] === 'Z') {
        scoreShape += 3
        console.log('scissors');
    }


    /* switch (shape[1]) {
        case 'X':
            scoreShape += 1;
            console.log('rock');
        case 'Y':
            scoreShape += 2;
            console.log('paper');
        case 'Z':
            scoreShape += 3
            console.log('scissors');
            break;
    } */

    if (shape[0] === 'A' && shape[1] === 'X') {
        scoreRound += 3;
        console.log("Nul");
    }
    if (shape[0] === 'B' && shape[1] === 'Y') {
        scoreRound += 3;
        console.log("Nul");
    }
    if (shape[0] === 'C' && shape[1] === 'Z') {
        scoreRound += 3;
        console.log("Nul");
    }
    if (shape[0] === 'A' && shape[1] === 'Y') {
        scoreRound += 6;
        console.log("Gagné");
    }
    if (shape[0] === 'B' && shape[1] === 'Z') {
        scoreRound += 6;
        console.log("Gagné");
    }
    if (shape[0] === 'C' && shape[1] === 'X') {
        scoreRound += 6;
        console.log("Gagné");
    }
    if (shape[0] === 'A' && shape[1] === 'Z') {
        scoreRound += 0;
        console.log("Perdu");
    }
    if (shape[0] === 'B' && shape[1] === 'X') {
        scoreRound += 0;
        console.log("Perdu");
    }
    if (shape[0] === 'B' && shape[1] === 'Y') {
        scoreRound += 0;
        console.log("Perdu");
    }

    /*  switch (shape[0], shape[1]) {
         case 'A' && 'X':
             scoreRound += 3;
             console.log("Nul");
         case 'A' && 'Y':
             scoreRound += 6;
             console.log("Gagné");
         case 'A' && 'Z':
             scoreRound += 0;
             console.log("Perdu");
         case 'B' && 'Y':
             scoreRound += 3;
             console.log("Nul");
         case 'B' && 'Z':
             scoreRound += 6;
             console.log("Gagné");
         case 'B' && 'X':
             scoreRound += 0;
             console.log("Perdu");
         case 'C' && 'Z':
             scoreRound += 3;
             console.log("Nul");
         case 'C' && 'X':
             scoreRound += 6;
             console.log("Gagné");
         case 'C' && 'Y':
             scoreRound += 0;
             console.log("Perdu");
             break;
     } */



});

console.log(scoreShape);
console.log(scoreRound);
var resultTotal = scoreShape + scoreRound;
console.log(resultTotal);