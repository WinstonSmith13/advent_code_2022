import { promises as fs, access, constants } from 'fs'

export default async (filePath) => {

    // Verify path exist
    access(filePath, constants.F_OK, async (err) => {

        if (err) {

            // Trigger warning if there is an error
            throw new Error('E_FILE_UNFOUND')

        }

    })

    const data = await fs.readFile(filePath, 'utf8')
    return data

}

//data.writeFileSync("./Day1/puzzle_file.txt", "Mon premier fichier.");

//const fileContent = data.readFileSync('./Day1/puzzle_file.txt', 'utf8');

//console.log(fileContent);