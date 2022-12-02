import { join } from 'path';
import getPuzzleFile from './puzzle_parser.js'

export default async () => {
    const puzzle = await getPuzzleFile(join(process.cwd(), 'src', 'Day1', 'puzzle_file.txt'))
    const resolver = await import(join(process.cwd(), 'src', 'Day1', 'common.js'))
    const result = await resolver(puzzle)
    
    console.log(result)
};