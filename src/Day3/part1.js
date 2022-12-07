/* SacDos => deux parties 
Prendre en compte les majuscules. 
150 caractères dans un compartiment
150 dans l'autre 

rucksack => ligne 
compartiment = ligne/2

trouver les caractères identiques sachant que casesensitive 

*/

import { promises as fs, access, constants } from 'fs'

const RUCKSACK_SEPERATOR = '\n'; 


const fileContent = await fs.readFile('puzzle_file', 'utf8');

function splitStr(str, separator) {

    // Function to split string
    var string = str.split(separator);


    return string
};

const RucksackEntier = splitStr(fileContent, RUCKSACK_SEPERATOR);
/* const rucksack = {
    'firstCompartment': [],
    'SecondCompartment': [],
};  */
var firstCompartment= [];
var secondCompartment= [];

RucksackEntier.forEach((element)=> {
    const lengthRucksack = (element.split('').length)/2;
    const elementRucksackFirst = element.split('', lengthRucksack);
    
    const lettre = element.split('');
    const elementRucksackSecond = lettre.slice(lengthRucksack);

       firstCompartment.push(elementRucksackFirst);
       secondCompartment.push(elementRucksackSecond);
})



console.log(firstCompartment[0][0]);
