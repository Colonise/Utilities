import { copy } from '../objects';
import { getWords } from './get-words';
// eslint-disable-next-line no-duplicate-imports
import type { GetWordsOptions } from './get-words';
import { toLowerCase } from './to-lower-case';

export function toDotCase(value: string): string;
export function toDotCase(value: string, options: GetWordsOptions): string;
export function toDotCase(value: string, options: GetWordsOptions = {}): string {
    const lowerCaseValue = toLowerCase(value);
    const lowerCaseWords = getWords(lowerCaseValue, copy({ pascalCaseAsSeparator: true }, options));
    const result = lowerCaseWords.join('.');

    return result;
}
