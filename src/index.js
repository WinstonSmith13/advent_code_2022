import { join } from 'path';
import getPuzzle from './puzzle_parser.js'

export default async () => {
    const puzzle = await getPuzzle(join(process.cwd(), 'src', 'Day1', 'puzzle_file'))
    const { default: resolver } = await import(join(process.cwd(), 'src', 'Day1', 'part1.js'))
    const result = await resolver(puzzle)
    
    console.log(result)
};