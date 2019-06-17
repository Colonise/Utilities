import { copy } from '../objects';
import { StringDictionary, toString } from '../types';

/**
 * The defaults are English-based because the author only writes in English.
 *
 * Anything not in letters or separators will not be included in words, but will not separate words.
 */
export interface GetWordsOptions {
    /**
     * Whether to include the character in words.
     *
     * Default includes:
     *  - The English Alphabet in lowercase
     *  - The English Alphabet in UPPERCASE
     *  - The English Numbers
     */
    letters?: StringDictionary<boolean>;
    /**
     * Whether to treat the characters as part of a separator between words.
     *
     * Default:
     *  - Space
     *  - Tab: \t
     *  - New: Line \n
     *  - Carriage Return: \r
     *  - NUL: \0
     */
    separators?: StringDictionary<boolean>;
}

const defaultGetWordOptions: GetWordsOptions = {
    letters: {
        'a': true,
        'b': true,
        'c': true,
        'd': true,
        'e': true,
        'f': true,
        'g': true,
        'h': true,
        'i': true,
        'j': true,
        'k': true,
        'l': true,
        'm': true,
        'n': true,
        'o': true,
        'p': true,
        'q': true,
        'r': true,
        's': true,
        't': true,
        'u': true,
        'v': true,
        'w': true,
        'x': true,
        'y': true,
        'z': true,
        'A': true,
        'B': true,
        'C': true,
        'D': true,
        'E': true,
        'F': true,
        'G': true,
        'H': true,
        'I': true,
        'J': true,
        'K': true,
        'L': true,
        'M': true,
        'N': true,
        'O': true,
        'P': true,
        'Q': true,
        'R': true,
        'S': true,
        'T': true,
        'U': true,
        'V': true,
        'W': true,
        'X': true,
        'Y': true,
        'Z': true,
        '0': true,
        '1': true,
        '2': true,
        '3': true,
        '4': true,
        '5': true,
        '6': true,
        '7': true,
        '8': true,
        '9': true
    },
    separators: {
        ' ': true,
        '\t': true,
        '\n': true,
        '\r': true,
        '\0': true
    }
};

function filterWord(word: string, letters: StringDictionary<boolean>): string {
    let filteredWord = '';

    for (let i = 0; i < word.length; i++) {
        if (letters[word[i]]) {
            filteredWord += word[i];
        }
    }

    return filteredWord;
}

export function getWords(value: string): string[];
export function getWords(value: string, options: GetWordsOptions): string[];
export function getWords(_value: string, _options: GetWordsOptions = {}): string[] {
    const value = toString(_value);
    const options = copy(defaultGetWordOptions, _options);
    const letters = options.letters || {};
    const separators = options.separators || {};

    const result: string[] = [];
    let lastCharacterWasSeparator = false;
    let currentWordStart = 0;
    let currentWordEnd = 0;

    for (let i = 0; i < value.length; i++) {
        const character = value[i];
        const currentCharacterIsSeparator = separators[character];
        const isEndOfString = i === value.length - 1;

        let foundWord = false;

        if (lastCharacterWasSeparator && !currentCharacterIsSeparator) {
            currentWordStart = i;
        }

        if (!lastCharacterWasSeparator && currentCharacterIsSeparator) {
            currentWordEnd = i - 1;
            foundWord = true;
        }

        if (isEndOfString) {
            currentWordEnd = i;
            foundWord = true;
        }

        if (foundWord) {
            const word = value.slice(currentWordStart, currentWordEnd + 1);
            const filteredWord = filterWord(word, letters);

            result.push(filteredWord);
        }

        lastCharacterWasSeparator = currentCharacterIsSeparator;
    }

    return result;
}
