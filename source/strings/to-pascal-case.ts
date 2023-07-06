import { capitalise } from './capitalise';
import { copy } from '../general';
import { getWords } from './get-words';
import type { GetWordsOptions } from './get-words';

export function toPascalCase(value: string): string;
export function toPascalCase(value: string, options: GetWordsOptions): string;
export function toPascalCase(value: string, options: GetWordsOptions = {}): string {
    const words = getWords(value, copy({ pascalCaseAsSeparator: true }, options));

    let result = '';

    for (const word of words) {
        result += capitalise(word);
    }

    return result;
}
