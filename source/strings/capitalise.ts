import { toLowerCase } from './to-lower-case';
// eslint-disable-next-line @typescript-eslint/no-shadow
import { toString } from '../types';
import { toUpperCase } from './to-upper-case';

export function capitalise(value: unknown): string {
    const parsedValue = toString(value);

    if (parsedValue.length === 0) {
        return '';
    }

    const result = toUpperCase(parsedValue[0]) + toLowerCase(parsedValue.slice(1));

    return result;
}
