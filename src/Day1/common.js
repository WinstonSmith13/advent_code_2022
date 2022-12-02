
import { promises as fs, access, constants } from 'fs'

const PACKAGE = '\n\n'
const CAL = '\n'



function splitStr(str, separator) {
      
    // Function to split string
    var string = str.toString().split(separator);
      
    console.log(string);
}
  
// Initialize string
const fileContent = await fs.readFile('puzzle_file', 'utf8');
  
var separator = '\n\n';
  
// Function call
splitStr(fileContent, separator);

