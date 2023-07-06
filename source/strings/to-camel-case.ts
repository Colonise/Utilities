import { capitalise } from './capitalise';
import { copy } from '../general';
import { getWords } from './get-words';
import type { GetWordsOptions } from './get-words';
import { toLowerCase } from './to-lower-case';

export function toCamelCase(value: string): string;
export function toCamelCase(value: string, options: GetWordsOptions): string;
export function toCamelCase(value: string, options: GetWordsOptions = {}): string {
    const words = getWords(value, copy({ pascalCaseAsSeparator: true }, options));

    if (words.length === 0) {
        return '';
    }

    let result = toLowerCase(words[0]);

    for (let i = 1; i < words.length; i++) {
        result += capitalise(words[i]);
    }

    return result;
}
