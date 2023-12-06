import Statement from "./statement"

/**
 * Class Lectro : Walk through a string representing a JavaScript program & analyze the content, the semantic & the structure of it.
 * Also can 'Prettify' this code.
 */
export default class Lectro {
    /**
     * Text to be parsed by the analyzer.
     * @private
     */
    #text: string;
    /**
     * Array of elements detected as tokens by the analyzer.
     * @private
     */
    #tokens: Array<string>;
    /**
     * Array of objects representing the structure of the code.
     * @private
     */
    #ast: Array<Statement>;

    constructor(code: string) {
        this.#text = code;
        this.#tokens = [];
        this.#ast = [];
    }

    /**
     * Class methods
     */

    /**
     * Iterate through #text and detects JavaScript's tokens, push every token in #tokens.
     */
    walk(): void {

    }

    /**
     * Adds a token to the array of tokens.
     * @param token
     */
    addToken(token: string): void {
        this.#tokens.push(token)
    }

    /**
     * Iterates through #tokens and convert every token to its corresponding object.
     */
    parse(): void {

    }

    /**
     * Prettify the code in #text.
     */
    format(): string {
        return "";
    }

    /**
     * Static members' getters & setters
     */
    set ast(value: Array<Statement>) {
        this.#ast = value;
    }

    get ast(): Array<Statement> {
        return this.#ast;
    }

    get tokens(): Array<string> {
        return this.#tokens;
    }

    set tokens(value: Array<string>) {
        this.#tokens = value;
    }

    get text(): string {
        return this.#text;
    }

    set text(value: string) {
        this.#text = value;
    }
}