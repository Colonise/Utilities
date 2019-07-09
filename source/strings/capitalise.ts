import { toString } from '../types';
import { toLowerCase } from './to-lower-case';
import { toUpperCase } from './to-upper-case';

export function capitalise(value: string): string;
export function capitalise(_value: string): string {
    const value = toString(_value);

    if (value.length === 0) {
        return '';
    }

    const result = toUpperCase(value[0]) + toLowerCase(value.slice(1));

    return result;
}
