import { copy } from '../objects';
import { capitalise } from './capitalise';
import { getWords, GetWordsOptions } from './get-words';

export function toPascalCase(value: string): string;
export function toPascalCase(value: string, options: GetWordsOptions): string;
export function toPascalCase(value: string, options: GetWordsOptions = {}): string {
    const words = getWords(value, copy({ pascalCaseAsSeparator: true }, options));

    let result = '';

    for (let i = 0; i < words.length; i++) {
        result += capitalise(words[i]);
    }

    return result;
}
