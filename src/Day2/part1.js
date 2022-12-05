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


if (x){ScoreShape = 1 } and if (A < Y || B < Z || C < X ) {ScoreRound = 6} elseif (A = X  || B = Y || C = Z) {ScoreRound = 6} else {scoreRound = 0}
if (y){ScoreShape = 2 } and if
if (z) {ScoreShape = 3 } and if






const lost = 0;
const draw = 3;
const win = 6;

resultRound = pointShape + pointRound
resultTotal = sum(resultRound)
*/


function splitStr(str, separator) {

    // Function to split string
    var string = str.split(separator);


    return string
};


const fileContent = await fs.readFile('puzzle_file', 'utf8');


const PACKAGE = '\n';

const gameScript = splitStr(fileContent, PACKAGE);

console.log(gameScript);

gameScript.forEach((round) => {
    /*  */

});