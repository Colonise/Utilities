import { copy } from '../general';
import { getWords } from './get-words';
import type { GetWordsOptions } from './get-words';
import { toLowerCase } from './to-lower-case';

export function toSnakeCase(value: string): string;
export function toSnakeCase(value: string, options: GetWordsOptions): string;
export function toSnakeCase(value: string, options: GetWordsOptions = {}): string {
    const words = getWords(value, copy({ pascalCaseAsSeparator: true }, options));
    const result = words.map(toLowerCase).join('_');

    return result;
}
