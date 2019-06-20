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
    /**
     * Enable detecting words not separated by a character, but each word starts with an upper case character. (PascalCase).
     *
     * This will treat the each upper case character as the start of a new word, and therefore, the end of the previous word.
     *
     * Default false.
     */
    pascalCaseAsSeparator?: boolean;
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
    },
    pascalCaseAsSeparator: false
};

const upperCaseLetters: StringDictionary<boolean> = {
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
    'Z': true
};

enum CharacterType {
    Letter,
    UpperCaseLetter,
    Separator,
    Ignore
}

function isUpperCaseLetter(letter: string): boolean {
    return upperCaseLetters[letter[0]];
}

function getCharacterType(character: string, options: GetWordsOptions): CharacterType {
    if (options.letters && options.letters[character]) {
        return options.pascalCaseAsSeparator && isUpperCaseLetter(character)
            ? CharacterType.UpperCaseLetter
            : CharacterType.Letter;
    } else if (options.separators && options.separators[character]) {
        return CharacterType.Separator;
    } else {
        return CharacterType.Ignore;
    }
}

export function getWords(value: string): string[];
export function getWords(value: string, options: GetWordsOptions): string[];
export function getWords(_value: string, _options: GetWordsOptions = {}): string[] {
    const value = toString(_value);
    const options = copy(defaultGetWordOptions, _options);

    const result: string[] = [];
    let currentWord = '';

    for (let i = 0; i < value.length; i++) {
        const character = value[i];
        const currentCharacterType = getCharacterType(character, options);

        switch (currentCharacterType) {
            case CharacterType.Separator:
                if (currentWord.length > 0) {
                    result.push(currentWord);
                }

                currentWord = '';
                break;

            case CharacterType.UpperCaseLetter:
                if (currentWord.length > 0) {
                    result.push(currentWord);
                }

                currentWord = character;
                break;

            case CharacterType.Letter:
                currentWord += character;
                break;

            case CharacterType.Ignore:
            default:
        }

        // If we are at the end of the string and have a word, add it
        if (i === value.length - 1 && currentWord.length > 0) {
            result.push(currentWord);
        }
    }

    return result;
}
