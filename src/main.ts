import { readFileSync, writeFileSync } from 'fs';
import Lectro from "./classes/Lectro"

let code: string = readFileSync('./input/test.js').toString()

let lexer : Lectro = new Lectro(code)
lexer.walk()
lexer.parse()
writeFileSync('./output/formatted.js', lexer.format())